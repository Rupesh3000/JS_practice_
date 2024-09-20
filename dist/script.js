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


const dob = document.getElementById("dob");
const Agebtn = document.getElementById("age-btn");

let age = document.getElementById("age")

console.log(dob,Agebtn, age);