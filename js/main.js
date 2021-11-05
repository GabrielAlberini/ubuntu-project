// Remove the "preload" class from the body as page starts the load.

const body = document.getElementById("body");

window.addEventListener("load", () => {
  setInterval(() => {
    console.log(body);
    body.classList.remove("preload");
  }, 1);
});

// Hamburger menu

const hamburger = document.getElementById("hamburger");

const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Removing the "show" class when going beyond 768px wide (viewport)

window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) nav.classList.remove("show");
});

// Eliminating all animations when resizing

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

// Smooth scrolling (header)

const terapia = document.getElementById("terapia");

terapia.addEventListener("click", () => {
  document
    .getElementById("section__main")
    .scrollIntoView({ block: "start", behavior: "smooth" });
});

const voucher = document.getElementById("voucher");

voucher.addEventListener("click", () => {
  document
    .getElementById("section__vouchers")
    .scrollIntoView({ block: "start", behavior: "smooth" });
});

const meditaciones = document.getElementById("meditaciones");

// meditaciones.addEventListener("click", () => {
//   document
//     .getElementById("")
//     .scrollIntoView({ block: "start", behavior: "smooth" });
// });

const sobreMi = document.getElementById("sobreMi");

// sobreMi.addEventListener("click", () => {
//   document
//     .getElementById("")
//     .scrollIntoView({ block: "start", behavior: "smooth" });
// });

const contacto = document.getElementById("contacto");

// contacto.addEventListener("click", () => {
//   document
//     .getElementById("")
//     .scrollIntoView({ block: "start", behavior: "smooth" });
// });

// Smooth scrolling (buttons)

// Carousel

let slidePosition = 0;
const slides = document.getElementsByClassName("carousel__item");
const totalSlides = slides.length;

document
  .getElementById("carousel__button--next")
  .addEventListener("click", function () {
    moveToNextSlide();
  });
document
  .getElementById("carousel__button--prev")
  .addEventListener("click", function () {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel__item--visible");
    slide.classList.add("carousel__item--hidden");
  }

  slides[slidePosition].classList.add("carousel__item--visible");
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}

// Carousel auto-play

setInterval(moveToNextSlide, 7500);
