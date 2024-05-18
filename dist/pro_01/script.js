

let btn = document.querySelector("#btn");
let input = document.querySelector("input");
let img = document.querySelector('img');

btn.addEventListener("click", () => {
    
    const inputValue = input.value;
    
    if (!inputValue) {
        alert("Please enter a valid URL")
        return;
    } 
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example${inputValue}`;
   


})