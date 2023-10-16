const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const numberOfSlides = slides.length;
let slideNumber = 0;

//slider next button
nextBtn.onclick = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideNumber++;
  if (slideNumber > numberOfSlides - 1) {
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
};

//slider prev button
prevBtn.onclick = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideNumber--;
  if (slideNumber < 0) {
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
};

const menu = document.querySelector(".bx-menu");
const bx = document.querySelector(".bx-x");

const navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.remove("active");
  bx.classList.add("active");
  navbar.style.display = "flex";
  navbar.classList.remove("navbarRes");
};
bx.onclick = () => {
  bx.classList.remove("active");
  menu.classList.add("active");
  navbar.classList.add("navbarRes");
};
