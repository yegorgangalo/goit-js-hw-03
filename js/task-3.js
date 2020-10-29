const findBestEmployee = function(employees) {
    const arrayNames = Object.keys(employees);
    let BestResult = 0;
    let BestEmployee = "";
    for (const name of arrayNames) {
        if (employees[name] > BestResult) {
            BestResult = employees[name];
            BestEmployee = name;
        }
    }
    return BestEmployee;
};

// const findBestEmployee = function(employees) {
//     const arrayNamesResults = Object.entries(employees);
//     console.table(arrayNamesResults);
//     let BestResult = 0;
//     let BestEmployee = [];
//     for (const nameResult of arrayNamesResults) {
//         if (nameResult[1] > BestResult) {
//             BestResult = nameResult[1];
//             BestEmployee = `${nameResult[0]}:${nameResult[1]}`;
//         }
//     }
//     return BestEmployee;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux


// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного
// (который выполнил больше всех задач).Сотрудники и кол - во выполненых задач содержатся как свойства объекта в формате
// "имя": "кол-во задач".