import Modal from "./modules/modal.js";
import mobileNav from "./modules/mobile-nav.js";
import GraphAccordion from "./modules/accordion.js";
import FooterAccordion from "./modules/accordion-footer.js";
import loader from "./modules/loader.js";
import pagination from "./modules/pagination.js";
import search from "./modules/search.js";

loader();
mobileNav();

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

let searchInput = document.querySelector(".search__line");
let searchContiner = document.querySelector(".search__container");

let data1 = document
  .querySelector(".news-container__bas")
  .querySelectorAll(".news-cart");

let data2 = Array.from(data1);

let up = document.querySelector("#up");
let low = document.querySelector("#low");

function delCloseBtn(button) {
  if (button) {
    button.remove();
    searchInput.innerText = null;

    searchContiner.querySelectorAll(".search__line-teg").forEach((elRem) => {
      elRem.remove();
    });
  }
}

pagination(data2);
search(data2);

up.addEventListener("click", () => {
  if (data2.lenght != 1 && data2.lenght != 1) {
    data2.sort(function (b, a) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      console.log(
        Date.parse(b.querySelector(".news-cart__data").textContent) -
          Date.parse(a.querySelector(".news-cart__data").textContent)
      );
      return (
        Date.parse(b.querySelector(".news-cart__data").textContent) -
        Date.parse(a.querySelector(".news-cart__data").textContent)
      );
    });
    data2.forEach((element) => {
      console.log(element.querySelector(".news-cart__data"));
    });
    pagination(data2);
    search(data2);

    const button = document.querySelector(".close__button");
    delCloseBtn(button);
  }
});

low.addEventListener("click", () => {
  if (data2.lenght != 1 && data2.lenght != 1) {
    data2.sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.

      return (
        Date.parse(b.querySelector(".news-cart__data").textContent) -
        Date.parse(a.querySelector(".news-cart__data").textContent)
      );
    });
    data2.forEach((element) => {
      console.log(element.querySelector(".news-cart__data"));
    });
    pagination(data2);
    search(data2);

    const button = document.querySelector(".close__button");
    delCloseBtn(button);
  }
});
