
const countTotalSalary = function(employees) {
  const arrValues = Object.values(employees);
  let total = 0;
  for (const value of arrValues) {
    total += value;
  }
  return total;
};

/*
* Вызовы функции для проверки работоспособности твоей реализации.
*/
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
  ); // 330

  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
); // 400



// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму зарплаты работников и возращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".