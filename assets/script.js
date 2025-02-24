const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");

console.log("Flèche gauche :", leftArrow);
console.log("Flèche droite :", rightArrow);

leftArrow.addEventListener("click", () => {
    console.log("Clic sur la flèche gauche !");
});

rightArrow.addEventListener("click", () => {
    console.log("Clic sur la flèche droite !");
});

let index = 0;

function createDots() {
	dotsContainer.innerHTML = "";

    slides.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === index) dot.classList.add("dot_selected"); 

		dot.addEventListener("click", () => {
            index = i;
            showSlide();
        });

        dotsContainer.appendChild(dot);
    });
}

function showSlide() {
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
    tagLine.innerHTML = slides[index].tagLine;
    updateDots();
}

function updateDots() {
    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("dot_selected", i === index);
    });
}

leftArrow.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide();
});

rightArrow.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide();
});

createDots();
showSlide();