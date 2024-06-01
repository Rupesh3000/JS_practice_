
const input = document.querySelector(".input-word");
const btn = document.querySelector(".btn");
const output = document.querySelector(".meaning");


btn.addEventListener("click", async () => {
    const inputValue = input.value;

    if (inputValue === '') {
        alert("enter a word")
    } else {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`;

        let meaning = await fetch(url);
        let data = await meaning.json();

        if (data[0] == undefined) {
            alert("cannot find meaning")
        } else {
            output.innerHTML = data[0]["meanings"][0]["definitions"][0]["definition"];
        }
        
        
    }
})