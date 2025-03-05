// Hamburger Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Carousel Auto-Play
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);

// Initialize Carousel
showSlide(currentSlide);
