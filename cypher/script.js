// script.js

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
        slide.style.display = "none";
        slide.style.animation = "";
        if (index === slideIndex) {
            slide.style.display = "block";
            slide.style.animation = "slideAnimation 2s forwards";
        }
    });
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    setTimeout(showSlides, 100000); // Change slide every 10 seconds
}

function plusSlides(n) {
    slideIndex += n - 1; // adjust slideIndex since showSlides increments it
    if (slideIndex < 0) {
        slideIndex = document.querySelectorAll(".slide").length - 1;
    } else if (slideIndex >= document.querySelectorAll(".slide").length) {
        slideIndex = 0;
    }
    showSlides();
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides();

    const textElements = document.querySelectorAll(".animated-text");
    textElements.forEach((element) => {
        const text = element.textContent;
        element.textContent = "";
        let index = 0;
        const typingEffect = setInterval(() => {
            element.textContent += text[index];
            index++;
            if (index === text.length) {
                clearInterval(typingEffect);
                element.classList.add("completed");
            }
        }, 50);
    });
});
