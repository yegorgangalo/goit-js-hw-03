
/*
* Типов транзацкий всего два.
* Можно положить либо снять деньги со счета.
*/
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };

// const Transaction = {
//     type: 'deposit',
//     amount: 0,
// };

/*
* Каждая транзакция это объект со свойствами: id, type и amount
*/

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    /*
    * Метод создает и возвращает объект транзакции.
    * Принимает сумму и тип транзакции.
    */
    createTransaction(amount, type) {
        const Transaction = {amount, type};
        return Transaction;
    },

   /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
    deposit(amount) {
        this.balance += amount;
        const transaction = this.createTransaction(amount, "deposit");
        transaction.id = this.transactions.length;
        this.transactions.push(transaction);
        return this.transactions;
    },

  /*
  * Метод отвечающий за снятие суммы с баланса.
  * Принимает сумму танзакции.
  * Вызывает createTransaction для создания объекта транзакции
  * после чего добавляет его в историю транзакций.
  *
  * Если amount больше чем текущий баланс, выводи сообщение
  * о том, что снятие такой суммы не возможно, недостаточно средств.
  */
    withdraw(amount) {
        if (amount > this.balance) {
            return `снятие суммы ${amount} не возможно, недостаточно средств`;
        }
        this.balance -= amount;
        const transaction = this.createTransaction(amount, "withdraw");
        transaction.id = this.transactions.length;
        this.transactions.push(transaction);
        return this.transactions;
    },


//  Метод возвращает текущий баланс
    getBalance() {
        return this.balance;
    },

/*
* Метод ищет и возвращает объект транзации по id
*/
    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (transaction.id === id) {
                return transaction;
            }
        }
        return `транзакції ${id} немає в базі`;
    },

/*
* Метод возвращает количество средств
* определенного типа транзакции из всей истории транзакций
*/
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
console.log(account.createTransaction(50, "withdraw"));
console.table(account.deposit(400));
console.table(account.withdraw(20));
console.table(account.withdraw(150));
console.table(account.deposit(250));
console.table(account.deposit(130));
console.table(account.withdraw(250));
console.table(account.withdraw(50));
console.log(account.getBalance());
console.log(account.getTransactionTotal("deposit"));
console.log(account.getTransactionTotal("withdraw"));
console.log(account.getTransactionDetails(4));