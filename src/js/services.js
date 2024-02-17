import mobileNav from "./modules/mobile-nav.js";
import loader from "./modules/loader.js";
import GraphAccordion from "./modules/accordion.js";
import FooterAccordion from "./modules/accordion-footer.js";
import fixedScrollBlock from "./modules/fixed-box-social.js";
import Modal from "./modules/modal.js";

const modal = new Modal({
  isOpen: (modal) => {
    console.log("opened");
  },
  isClose: () => {
    console.log("closed");
  },
});

mobileNav();
loader();
window.addEventListener("scroll", fixedScrollBlock);

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
