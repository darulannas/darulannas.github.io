const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => nav.classList.toggle("slide"));

const scrollButton = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => (scrollButton.style.display = window.scrollY > 0 ? "block" : "none"));
