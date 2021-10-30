const hamburger = document.getElementById("hamburger");

const nav__list = document.getElementById("nav__list");

console.log(hamburger, nav__list);

hamburger.addEventListener("click", () => {
  nav__list.classList.toggle("show");
});

// Removiendo la clase show al superar el breakpoint de 768

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) nav__list.classList.remove("show");
});

// Smooth scrolling

const terapia = document.getElementById("terapia");

terapia.addEventListener("click", () => {
  document
    .getElementById("section__main")
    .scrollIntoView({ block: "start", behavior: "smooth" });
});

const vouchers = document.getElementById("voucher");

vouchers.addEventListener("click", () => {
  document
    .getElementById("section__vouchers")
    .scrollIntoView({ block: "start", behavior: "smooth" });
});
