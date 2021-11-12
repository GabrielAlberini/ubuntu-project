// Remove the "preload" class from the body as page starts the load.

const body = document.getElementById("body");

window.addEventListener("load", () => {
  setInterval(() => {
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

// Function to generate smooth scrolling

const scrollToStart = (origin, target) => {
  origin.addEventListener("click", () => {
    let elementPosition = target.getBoundingClientRect().top;
    let offsetPosition = elementPosition - 100
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  })
}

const scrollToCenter = (origin, target) => {
  origin.addEventListener("click", () => {
    target.scrollIntoView({ block: "center", behavior: "smooth" })
  })
}

// Smooth scrolling (header)

// TERAPIAS

const terapia = document.getElementById("terapia");

const ver__terapia = document.getElementById("ver__terapia")

scrollToStart(terapia, ver__terapia)

// VOUCHER

const voucher = document.getElementById("voucher");

const ver__vouchers = document.getElementById("ver__vouchers")

scrollToCenter(voucher, ver__vouchers)

// SOBRE MI

const sobreMi = document.getElementById("sobreMi");

const ver__sobreMi = document.getElementById("ver__sobreMi")

scrollToCenter(sobreMi, ver__sobreMi)

// Smooth scrolling (buttons - NO CARRUSEL)

// ASTROLOGIA

const astrologia = document.getElementById("astrologia");

const ver__astrologia = document.getElementById("ver__astrologia")

scrollToStart(astrologia, ver__astrologia)

// smoothScrolling(astrologia, ver__astrologia, scrollingPropsCenter)

// REGISTROS AKASHICOS

const akashicos = document.getElementById("akashicos");

const ver__akashicos = document.getElementById("ver__akashicos")

scrollToStart(akashicos, ver__akashicos)

// REIKI TIBETANO

const reiki = document.getElementById("reiki");

const ver__reiki = document.getElementById("ver__reiki")

scrollToStart(reiki, ver__reiki)

// KUNDALINI YOGA

const kundalini = document.getElementById("kundalini");

const ver__kundalini = document.getElementById("ver__kundalini")

scrollToStart(kundalini, ver__kundalini)

// Smooth scrolling (buttons - CARRUSEL)

const astrologiaCarousel = document.getElementById("astrologiaCarousel");

scrollToStart(astrologiaCarousel, ver__astrologia)

const akashicosCarousel = document.getElementById("akashicosCarousel");

scrollToStart(akashicosCarousel, ver__akashicos)

const reikiCarousel = document.getElementById("reikiCarousel");

scrollToStart(reikiCarousel, ver__reiki)

const kundaliniCarousel = document.getElementById("kundaliniCarousel");

scrollToStart(kundaliniCarousel, ver__kundalini)

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
