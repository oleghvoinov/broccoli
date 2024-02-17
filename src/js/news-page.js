import Modal from "./modules/modal.js";
import mobileNav from "./modules/mobile-nav.js";
import GraphAccordion from "./modules/accordion.js";
import FooterAccordion from "./modules/accordion-footer.js";
import loader from "./modules/loader.js";
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
import addSlide from "./modules/add-slide.js";

let widthSwiper = 3;

if (document.documentElement.clientWidth <= 900) {
  widthSwiper = 2;
}

if (document.documentElement.clientWidth <= 767) {
  widthSwiper = 1;
}

loader();
mobileNav();
addSlide();

const modal = new Modal({
  isOpen: (modal) => {},
  isClose: () => {},
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

// import styles bundle
import "swiper/css/bundle";

const swiper = new Swiper(".swiper-news", {
  loop: true,
  slidesPerView: widthSwiper,

  speed: 1000,

  // navigation: {
  //   nextEl: "#sliderNextGallery",
  //   prevEl: "#sliderPrevGallery",
  // },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
