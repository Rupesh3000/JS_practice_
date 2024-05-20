
const allHeros = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVKWaM2Ur0GgyvXQLfPw4KaJN2myhoG-NBlg&s",
        name: "Iron man",
        lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quod error aperiam, praesentium, voluptas suscipit cum quis quas magni reicie!"
    },
    {
        img: "https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg?w=300",
        name: "Cap",
        lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quod error aperiam, praesentium, voluptas suscipit cum quis quas magni reicie!"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLisNWA_gDLU6onQslLRzCrxJPl8OfhFaOvDJc17PeqQ&s",
        name: "Thor",
        lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quod error aperiam, praesentium, voluptas suscipit cum quis quas magni reicie!"
    },
]

const img = document.querySelector("img")
const lorem = document.querySelector("#lorem")
const author = document.querySelector("#name")


setTimeout(() => {
    allHeros.forEach((hero) => {
        img.src = hero.img;
        lorem.textContent = hero.lorem;
        author.textContent = hero.name;
    })
}, 6000);