const inputRef = document.querySelector(".task6__input");
const buttonSendRef = document.querySelector(".task6__btn-send");
const buttonExitRef = document.querySelector(".task6__btn-exit");

let numbers = [];
let total = 0;

buttonSendRef.addEventListener("click", () => {
    let input = Number(inputRef.value);
    numbers.push(input);

    inputRef.value = "";
    inputRef.focus();
});

buttonExitRef.addEventListener("click", () => {
    for (const number of numbers) {
        total += Number.isNaN(number) ? 0 : number;
    };
    alert(`Общая сумма чисел равна ${total}`);

    numbers = [];
    total = 0;
});