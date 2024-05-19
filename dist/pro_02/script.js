const questionAndAns = [
    {
        quesion_1: "who is best super hero",
        option_A: "Iron man",
        option_B: "Thor",
        option_C: "Cap",
        option_D: "Black Panther",
        ans: "Iron man"
    }
    ,
    {
        quesion_1: " Who is the founder of the X-Men",
        option_A: "Charles Xavier",
        option_B: "Tony Stark",
        option_C: "Bruce Banner",
        option_D: "Steve Rogers",
        ans: "Charles Xavier"
    },
    {
        quesion_1: "Who is the villain in the first Avengers movie",
        option_A: "Loki",
        option_B: "ULtron",
        option_C: "Thanos",
        option_D: "Red Skull",
        ans: "Loki"
    },
    {
        quesion_1: "Which Infinity Stone does Vision have on his forehead?",
        option_A: "Time Stone",
        option_B: "Space Stone",
        option_C: "Mind Stone",
        option_D: "Reality Stonr",
        ans: "Mind Stone"
    }];


const quesion = document.querySelector("h1");

const option_a = document.getElementById("text-option-a");
const option_b = document.getElementById("text-option-b");
const option_c = document.getElementById("text-option-c");
const option_d = document.getElementById("text-option-d");


const btn = document.querySelector("button");

let currentQuestion = 0;
let score = 0;

quesion.textContent = questionAndAns[currentQuestion].quesion_1;
option_a.textContent = questionAndAns[currentQuestion].option_A;
option_b.textContent = questionAndAns[currentQuestion].option_B;
option_c.textContent = questionAndAns[currentQuestion].option_C;
option_d.textContent = questionAndAns[currentQuestion].option_D;

btn.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type = "radio"]:checked');
    if (checkedAns === null) {
        alert("jabe");
    } else {

        if (checkedAns.nextElementSibling.textContent === questionAndAns[currentQuestion].ans) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < questionAndAns.length) {
            quesion.textContent = questionAndAns[currentQuestion].quesion_1;
            option_a.textContent = questionAndAns[currentQuestion].option_A;
            option_b.textContent = questionAndAns[currentQuestion].option_B;
            option_c.textContent = questionAndAns[currentQuestion].option_C;
            option_d.textContent = questionAndAns[currentQuestion].option_D;
            checkedAns.checked = false;
        } else {
            alert("your score is " + score);
            logction.reload();
        }

    }
})

