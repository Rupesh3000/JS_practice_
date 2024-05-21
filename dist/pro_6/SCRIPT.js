
// multiplication Gamepad

const scoreValue = document.querySelector(".score-value");
const num1 = document.querySelector(".num-1");
const num2 = document.querySelector(".num-2");
const input = document.querySelector("input");
const btn = document.querySelector(".btn");
let score = 0;
let ans = Number(num1.innerHTML) * Number(num1.innerHTML);

btn.addEventListener("click", () => {

    if (!input.value) {
        alert("please inter ans");
    } else {

        if (ans === Number(input.value)) {
            score++
        }

        let randomNumber_1 = Math.floor(Math.random() * (20 - 1) + 1);
        let randomNumber_2 = Math.floor(Math.random() * (20 - 1) + 1);

        num1.innerHTML = randomNumber_1;
        num2.innerHTML = randomNumber_2;
        ans = Number(num1.innerHTML) * Number(num2.innerHTML);
        scoreValue.innerHTML = score;
        input.value = null
    }
});

// -* ------------------------------------------------------------------------* -


// clalender

const vaar = document.querySelector(".var");
const month = document.querySelector(".month");
const date = document.querySelector(".date");
const year = document.querySelector(".year");

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsOfYear = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

let newDate = new Date();

window.addEventListener("load", () => {
    vaar.innerHTML = daysOfWeek[newDate.getDay()];
    month.innerHTML = monthsOfYear[newDate.getMonth()];
    date.innerHTML = newDate.getDate();
    year.innerHTML = newDate.getFullYear();
})

console.log(newDate);
