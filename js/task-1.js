console.log(`%cTask-1`, `color: red; font-size: 16px;`);

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

const changeUser = function () {
    user.mood = "happy";
    user.hobby = "skydiving";
    user.premium = false;

    const keys = Object.keys(user);

    for (const key of keys) {
    console.log(`${key}:${user[key]}`)
    };

    // const entries = Object.entries(user);
    // console.table(entries);

    // for (const entry of entries) {
    // console.log(`${entry[0]}:${entry[1]}`)
    // };

    // return user;
};

console.table(changeUser());










// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of