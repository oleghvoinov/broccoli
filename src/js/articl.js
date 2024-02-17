import mobileNav from "./modules/mobile-nav.js";
import GraphAccordion from "./modules/accordion.js";
import FooterAccordion from "./modules/accordion-footer.js";
import fixedScrollBlock from "./modules/fixed-box.js";
import createTree from "./modules/structure.js";
import createModal from "./modules/modal-content.js";
import Modal from "./modules/modal.js";

let widthSwiper = 3;

if (document.documentElement.clientWidth <= 767) {
  widthSwiper = 2;
}

if (document.documentElement.clientWidth <= 600) {
  widthSwiper = 1;
}

const modal = new Modal({
  isOpen: (modal) => {
    console.log("opened");
  },
  isClose: () => {
    console.log("closed");
  },
});

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
// import styles bundle
import "swiper/css/bundle";

import tippy from "tippy.js";
import "tippy.js/dist/tippy.css"; // optional for styling

import loader from "./modules/loader.js";

//Для sidebar////////////////
const sidebar = document.querySelector(".sidebar"); //в том числе для fixed-block
const sidebarBtn = document.querySelector(".sidebar__btn");

//= modules/accordion.js
loader();
//Маска формы
// const form = document.querySelector(".form");
// const telSelector = form.querySelector('input[type="tel"]');
// const inputMask = new Inputmask("+7 (999) 999-99-99");
// inputMask.mask(telSelector);

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

window.addEventListener("scroll", fixedScrollBlock);

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

//Для оглавления

createTree(
  document.querySelector(".structure__content"),
  document.querySelector(".content-wrapper")
);

// init Swiper:
const swiper = new Swiper(".swiper-gallery", {
  // Optional parameters
  loop: true,
  spaceBetween: 10,
  speed: 70,
  slidesPerView: widthSwiper,
  centeredSlides: true,

  navigation: {
    nextEl: "#sliderNextGallery",
    prevEl: "#sliderPrevGallery",
  },
});

tippy(document.querySelectorAll(".link-img"), {
  allowHTML: true,
  arrow: false,

  interactive: true,
  interactiveBorder: 30,

  content(reference) {
    const id = reference.getAttribute("data-link");

    const template = document
      .querySelector(".slide-wrapper")
      .querySelector(`[data-linkmain=${id}]`);
    createModal(template, id);
    return template;
  },
  maxWidth: 200,
});

// document.body.addEventListener("click", (e) => {
//   console.log(e.target);
// });
