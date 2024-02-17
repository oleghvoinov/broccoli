const fixedBlock = document.querySelector(".social-sidebar");
const mainSection = document.querySelector(".section__continer");

function fixedScrollBlock() {
  let scrollDistance = window.scrollY;

  if (scrollDistance + fixedBlock.offsetHeight <= mainSection.offsetHeight) {
    fixedBlock.classList.remove("absolute");
    fixedBlock.classList.add("fixed");
  } else {
    fixedBlock.classList.add("absolute");
    fixedBlock.classList.remove("fixed");
  }
}

export default fixedScrollBlock;
