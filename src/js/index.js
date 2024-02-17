import mobileNav from "./modules/mobile-nav.js";
import GraphAccordion from "./modules/accordion.js";
import FooterAccordion from "./modules/accordion-footer.js";
import Modal from "./modules/modal.js";
import loader from "./modules/loader.js";
//= modules/accordion.js
loader();
//Маска формы
// const form = document.querySelector(".form");
// const telSelector = form.querySelector('input[type="tel"]');
// const inputMask = new Inputmask("+7 (999) 999-99-99");
// inputMask.mask(telSelector);

const modal = new Modal({
  isOpen: (modal) => {
    console.log("opened");
  },
  isClose: () => {
    console.log("closed");
  },
});

const accordion1 = new GraphAccordion(".accordion-1", {
  speed: 500,
});
const accordion2 = new GraphAccordion(".accordion-2", {
  speed: 500,
});
const accordion3 = new GraphAccordion(".accordion-3", {
  speed: 500,
});
const accordion4 = new GraphAccordion(".accordion-4", {
  speed: 500,
});
const accordion5 = new GraphAccordion(".accordion-5", {
  speed: 500,
});

const footerAccordion1 = new FooterAccordion(".accordion-footer-1", {
  speed: 500,
});
const footerAccordion2 = new FooterAccordion(".accordion-footer-2", {
  speed: 500,
});

mobileNav();
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
// import styles bundle
import "swiper/css/bundle";
// init Swiper:
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  parallax: true,
  speed: 1000,

  keyboard: {
    enabled: true,
  },

  pagination: {
    el: ".slider-controls__count",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Для прокрутки с главного экрана
let aboutUs = document.querySelector(".header__about-us");
let section2 = document.querySelector("#section");

aboutUs.addEventListener("click", (e) => {
  section2.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});

addEventListener("DOMContentLoaded", () => {
  const headerNav = document.querySelector(".header__nav");

  const scrollAnimation = () => {
    if (window.scrollY > window.innerHeight * 0.95) {
      headerNav.classList.add("header__nav-background");
    } else {
      headerNav.classList.remove("header__nav-background");
    }
  };

  window.addEventListener("scroll", () => {
    scrollAnimation();
  });
});
