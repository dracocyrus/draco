// Toggle Sidebar (Hamburger Menu)
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Slider for About Section
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-image');
const totalSlides = slides.length;

function updateSlider() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.querySelector('.slider-prev').addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
    updateSlider();
});

document.querySelector('.slider-next').addEventListener('click', () => {
    currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
    updateSlider();
});

// Auto Slide Feature
setInterval(() => {
    currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
    updateSlider();
}, 5000); // Auto slide every 5 seconds

// Fade-in Effect on Load
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => {
        el.style.animationPlayState = 'running';
    });
});
