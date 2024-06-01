
const result = document.getElementById("result");

const allBtn = document.querySelectorAll("button");

let str = "";
allBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.textContent.trim() === "AC") {
            str = ""
            result.value = str;
        } else if (e.target.textContent.trim() === "DLE") {
            str = str.substring(0, str.length - 1);
            result.value = str;
        } else if (e.target.textContent.trim() === "=") {
            str = eval(str);
            result.value = str;
        } else{
            str += e.target.textContent.trim();
            result.value = str;
        }
    })
})
