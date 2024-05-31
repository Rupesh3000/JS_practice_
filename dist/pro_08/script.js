const xValue = document.querySelector(".x-value");
const yValue = document.querySelector(".y-value");

window.addEventListener("mouseover", (event) => {
    xValue.innerHTML = event.clientX;
    yValue.innerHTML = event.clientY;
})