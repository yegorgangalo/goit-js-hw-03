console.log(`%cTask-7`, `color: red; font-size: 16px;`);
//Типов транзацкий всего два.
//Можно положить либо снять деньги со счета.
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

//Каждая транзакция это объект со свойствами: id, type и amount
const account = {
    balance: 0,// Текущий баланс счета
    transactions: [],// История транзакций
    _forIdTransactionsCounter: 0,//счетчик для задания id транзакциям

    set forIdTransactionsCounter(value) {
        this._forIdTransactionsCounter = value;
    },
    get forIdTransactionsCounter() {
        return this._forIdTransactionsCounter;
    },

    //Метод создает и возвращает объект транзакции.
    //Принимает сумму и тип транзакции.
    createTransaction(amount, type) {
        this.forIdTransactionsCounter += 1;
        const id = this.forIdTransactionsCounter;
        return {id, amount, type};
    },

   //Метод отвечающий за добавление суммы к балансу.
   //Принимает сумму транзакции.
   //Вызывает createTransaction для создания объекта транзакции
   //после чего добавляет его в историю транзакций
    deposit(amount) {
        this.balance += amount;
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
        return this.transactions;
    },

    //Метод отвечающий за снятие суммы с баланса.
    //Принимает сумму транзакции.
    //Вызывает createTransaction для создания объекта транзакции
    //после чего добавляет его в историю транзакций.
    //Если amount больше чем текущий баланс, выводи сообщение
    //о том, что снятие такой суммы не возможно, недостаточно средств.
    withdraw(amount) {
        if (amount > this.getBalance()) {
            return `снятие суммы ${amount} не возможно, недостаточно средств`;
        }
        this.balance -= amount;
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transaction);
        return this.transactions;
    },


    //  Метод возвращает текущий баланс
    getBalance() {
        return this.balance;
    },

    //Метод ищет и возвращает объект транзации по id
    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (transaction.id === id) {
                return transaction;
            }
        }
        return `транзакції ${id} немає в базі`;
    },

    //Метод возвращает количество средств
    //определенного типа транзакции из всей истории транзакций
    getTransactionTotal(type) {
        let transactionTotal = 0;
        for (const transaction of this.transactions) {
            if (transaction.type === type) {
                transactionTotal += transaction.amount;
            }
        }
        return transactionTotal;
    },
};


// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
console.table(account.deposit(400));
console.table(account.withdraw(20));
console.table(account.withdraw(150));
console.table(account.deposit(250));
console.table(account.deposit(130));
console.table(account.withdraw(250));
console.table(account.withdraw(50));
console.log(account.getBalance());
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.getTransactionDetails(4));



//деструктуризація просто так
const { balance, transactions, cashback = 0 } = account; //деструктуризація просто так
console.log("balance = " + balance);
console.table(transactions);
console.log("cashback = " + cashback);
console.table(account);