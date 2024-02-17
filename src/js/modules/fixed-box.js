const fixedBlock = document.querySelector(".sidebar");
const mainSection = document.querySelector(".main");

function fixedScrollBlock() {
  let scrollDistance = window.scrollY;

  if (
    scrollDistance + document.documentElement.clientHeight <=
    mainSection.offsetHeight
  ) {
    fixedBlock.classList.remove("absolute");
    fixedBlock.classList.add("fixed");
  } else {
    fixedBlock.classList.add("absolute");
    fixedBlock.classList.remove("fixed");
  }
}

export default fixedScrollBlock;
