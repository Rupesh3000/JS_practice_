
const weight = document.getElementById("weight-input");
const pound = document.getElementById("pound-output");

weight.addEventListener("input", () => {
    let ans = weight.value * 2.2;
    pound.innerHTML = ans.toFixed(2);
})