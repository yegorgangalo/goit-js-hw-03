console.log(`%cTask-5`, `color: red; font-size: 16px;`);

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
    const arrPropValue = [];
    for (const obj of arr) {
        if (obj.hasOwnProperty(prop)) {
            arrPropValue.push(obj[prop]);
        }
    }
    return arrPropValue;
};


// const getAllPropValues = function (arr, prop) {
//     const arrPropValue = [];
//     for (const obj of arr) {
//         const arrEntries = Object.entries(obj);
//         // console.table(arrEntries);
//         if (prop === 'name') {
//             arrPropValue.push(arrEntries[0][1]);
//         }
//         if (prop === 'price') {
//             arrPropValue.push(arrEntries[1][1]);
//         }
//         if (prop === 'quantity') {
//             arrPropValue.push(arrEntries[2][1]);
//         }
//     }

//     return arrPropValue;
// };

/*
* Вызовы функции для проверки работоспособности твоей реализации.
*/
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []

console.log(getAllPropValues(products, 'price')); //

// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
// Возвращает массив значений определенного свойства prop из каждого объекта в массиве.