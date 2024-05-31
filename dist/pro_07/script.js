
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const nextBtn = document.querySelector("button");



// using async and await


/* 
async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const date = await response.json()

    quote.innerHTML = date.content;
    author.innerHTML = `- ${date.author}`


} */

function randomQuote() {
    fetch('https://api.quotable.io/random')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            quote.innerHTML = data.content;
            author.innerHTML = `- ${data.author}`;
        })
        .catch(error => {
            console.error('Error fetching the quote:', error);
        });

}


nextBtn.addEventListener("click", randomQuote);


