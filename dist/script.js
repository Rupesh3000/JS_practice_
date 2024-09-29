//           Background Color
let colorButtons = document.querySelectorAll(".backColors")
let body = document.querySelector('body')
colorButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        body.style.backgroundColor = e.target.id;
    })
})
//               Qr code Generater
let qrInput = document.querySelector("#qr-input")
let qrBtn = document.querySelector("#qr-btn")
let qrImg = document.querySelector("#qr-img")
qrBtn.addEventListener("click", () => {
    let qrInputValue = qrInput.value;
    if (!qrInputValue) {
        alert("inter text to QR Code")
    } else {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInputValue}`
        // qrImg.classList.toggle("invisible")
    }
})


// Dice Roll Simulator
const dice = document.querySelector(".dice")
const diceBtn = document.querySelector(".dice-btn")
const diceUniCode = ["&#9857", "&#9858", "&#9859", "&#9860", "&#9861"]
let rollDice = () => {
    const rollResult = Math.floor(Math.random() * 5);
    const diceFace = diceUniCode[rollResult]
    dice.innerHTML = diceFace;
}

diceBtn.addEventListener("click", () => {
    dice.classList.add("animate-roll")
    setTimeout(() => {
        dice.classList.remove("animate-roll")
        rollDice()
    }, 300);
})


// calculator
const calBtns = document.querySelectorAll(".cal-btn")
const resultElement = document.getElementById('result'); // Add an ID to your result input field
let calculation = '';
calBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const btnValue = e.target.id;

        if (btnValue === "clear") {
            calculation = "";
        } else if (btnValue === "=") {
            calculation = eval(calculation);
        } else {
            calculation = calculation + btnValue
        }
        resultElement.value = calculation
    });
});


// Age calculation 


const birthdayEl = document.getElementById("dob");
const Agebtn = document.getElementById("age-btn");

let result = document.getElementById("age")

const calculateAge = () => {
    const dobValue = birthdayEl.value;
    if (dobValue === "") {
        alert("please inter the your DOB")
    } else {
        const age = getAge(dobValue)
        result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`
    }
}

const getAge = (dobValue) => {
    const currentDate = new Date()
    const birhdayDate = new Date(dobValue)
    const age = currentDate.getFullYear() - birhdayDate.getFullYear()
    const month = currentDate.getMonth() - birhdayDate.getMonth()
    if (month < 0 || (month === 0 && currentDate.getDate() < birhdayDate.getDate())) {
        age--
    }

    return age

}

Agebtn.addEventListener("click", calculateAge)



// Weather app 
// this app need to login to get api 
const userInput = document.getElementById("weather-input");
const inputBtn = document.getElementById("input-search-btn");

const temp = document.getElementById("temp");
const city = document.getElementById("city");

const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

inputBtn.addEventListener("click", () => {
    const userInputValue = userInput.value.trim();
    const demoApi = fetch(`https://jsonplaceholder.typicode.com/todos/`);

});



// digital clock 

const hourEl = document.getElementById("hour")
const minEl = document.getElementById("min")
const secEl = document.getElementById("sec")

function updateClock(params) {
    const currentDateTime = new Date()

    setTimeout(updateClock, 1000);
    const hour = currentDateTime.getHours()
    const min = currentDateTime.getMinutes()
    const sec = currentDateTime.getSeconds()

    const hourDeg = (hour / 12) * 360;
    // hourEl.style.transform = `rorate(${hourDeg}deg)`;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    const minDeg = (min / 60) * 360;
    // hourEl.style.transform = `rorate(${minDeg}deg)`
    minEl.style.transform = `rotate(${minDeg}deg)`;
    const secDeg = (sec / 60) * 360;
    // hourEl.style.transform = `rorate(${secDeg}deg)`
    secEl.style.transform = `rotate(${secDeg}deg)`;

    // const hourDeg = (hour % 12 + min / 60) * 30; // 30 degrees per hour
    // hourEl.style.transform = `rotate(${hourDeg}deg)`;

    // const minDeg = (min + sec / 60) * 6; // 6 degrees per minute
    // minEl.style.transform = `rotate(${minDeg}deg)`;

    // const secDeg = sec * 6; // 6 degrees per second
    // secEl.style.transform = `rotate(${secDeg}deg)`;
}
updateClock()



