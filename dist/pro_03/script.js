
// select all input 

const passOut = document.getElementById("pass-out");
const lengthNum = document.getElementById("length-num");
const lowerCase = document.getElementById("lowercase");
const upperCase = document.getElementById("uppercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");


// select bottons 

const copyBtn = document.getElementById("copy-btn");
const GTbtn = document.getElementById("gt-btn");


// add all upper and lower case letter , numbers and symbols

const Upletter = "ABCDEFGHIKLMNOPQRSTUVWXYZ ";
const LowLetter = "abcdefghiklmnopqrstuvwxyz ";
const num = "0123456789";
const allSym = "!@#$%^&*_-<>";


GTbtn.addEventListener("click", () => {

    let str = ""

    if (upperCase.checked) {
        str = str + Upletter;
    }

    if (lowerCase.checked) {
        str = str + LowLetter;
    }

    if (number.checked) {
        str = str + num;
    }

    if (symbol.checked) {
        str = str + allSym;
    }

    let password = "";
    for (let i = 0; i < lengthNum.value; i++) {
        let index = Math.floor(Math.random() * str.length);
        password += str[index];
    }

    passOut.value = password;
});


copyBtn.addEventListener("click", () => {
    const newEle = document.createElement("textarea");
    newEle.value = passOut.value;
    document.body.appendChild(newEle);
    newEle.select();
    document.execCommand('copy');
    alert("password comied");
    newEle.remove();
})