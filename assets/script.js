//Variables boutons prec et suivant
let btnLeft = document.querySelector("#left");
let btnRight = document.querySelector("#right")
//Variable index des slides
let currentBannerIndex = 0;

//Fonction click bouton prec et suivant
btnLeft.addEventListener("click", () => {
	currentBannerIndex -= 1;

})

btnRight.addEventListener("click", () => {
	currentBannerIndex += 1
})

console.log(currentBannerIndex);




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