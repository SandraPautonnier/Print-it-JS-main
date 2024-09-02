//Tableau slides
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

//Variables
const buttonLeft = document.querySelector(".arrow_left");
const buttonRight = document.querySelector(".arrow_right");
//console.log(buttonRight);

const dots = document.querySelector(".dots");

const bannerImage = document.querySelector(".banner-img");

const bannerText = document.querySelector("#banner p")

//Variable index des slides
let currentBannerIndex = 0;
//console.log(currentBannerIndex);

//Gestion des bullets points
function displayDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.className = currentBannerIndex === i ? "dot dot_selected" : "dot";
    dots.appendChild(dot);
  }
}

displayDots();

function updateDots() {
  for (let i = 0; i < dots.childNodes.length -1; i++) {
    const dot = dots.childNodes[i+1];
    dot.className =
     currentBannerIndex === i ? "dot dot_selected" : "dot";
     //if (currentBannerIndex === i) { "dot dot_selected"} else {"dot"}
  }
}

//Fonction click bouton prec et suivant
buttonLeft.addEventListener("click", function () {
  if (currentBannerIndex === 0) {
    currentBannerIndex = slides.length - 1;
  } else {
    currentBannerIndex -= 1;
  }
  
  bannerImage.src =
    "./assets/images/slideshow/" + slides[currentBannerIndex].image;
  bannerText.innerHTML = 
    slides[currentBannerIndex].tagLine;

  updateDots();
});

buttonRight.addEventListener("click", function () {
  if (currentBannerIndex === slides.length - 1) {
    currentBannerIndex = 0;
  } else {
    currentBannerIndex += 1;
  }
  bannerImage.src =
    "./assets/images/slideshow/" + slides[currentBannerIndex].image;
bannerText.innerHTML = 
    slides[currentBannerIndex].tagLine;
  //console.log("yes!");
  updateDots();
});
