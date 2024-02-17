function mobileNav() {
  const nav = document.querySelector(".nav-list");
  const headerNav = document.querySelector(".header__nav");

  // const navBtnOpen = document.querySelector("#modalOpen");
  const navBtnClose = document.querySelector("#modalClosed");

  const fixBlocks = document.querySelectorAll(".fix-block");

  const navOverlay = document.querySelector("#mobileNavOverlay");
  const mobileNav = document.querySelector("#mobileNav");
  const navLinksClose = document
    .querySelector(".mobile-nav__nav")
    .querySelectorAll("a");

  //navBtnOpen.onclick = toggleMobileNav;
  navBtnClose.onclick = toggleMobileNav;
  navOverlay.onclick = toggleMobileNav;

  navLinksClose.forEach((el) => {
    el.onclick = toggleMobileNav;
  });

  function toggleMobileNav() {
    navOverlay.classList.toggle("mobile-nav-overlay--open");
    navBtnClose.classList.toggle("opened");

    nav.classList.toggle("nav-list--open");
    mobileNav.classList.toggle("mobile-nav--open");

    if (
      nav.classList.contains("nav-list--open") &&
      headerNav.classList.contains("header__nav-background")
    ) {
      headerNav.classList.add("header__nav-background--open");
    }
    if (
      !nav.classList.contains("nav-list--open") &&
      headerNav.classList.contains("header__nav-background--open")
    ) {
      headerNav.classList.remove("header__nav-background--open");
    }

    if (document.body.getAttribute("style")) {
      if (document.body.getAttribute("style").indexOf("margin-right:") != -1) {
        enableScroll();
      }
    } else {
      disableScroll();
    }
    // document.body.classList.toggle("no-scroll");
  }

  let disableScroll = function () {
    let pagePosition = window.scrollY;
    lockPadding();
    document.body.classList.add("no-scroll");
    document.body.dataset.position = pagePosition;
  };

  let enableScroll = function () {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    console.log(pagePosition);

    unlockPadding();

    document.body.classList.remove("no-scroll");

    document.body.removeAttribute("data-position");
  };

  let lockPadding = function () {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + "px";

    fixBlocks.forEach((el) => {
      el.style.marginRight = paddingOffset;
    });

    document.body.style.marginRight = paddingOffset;
  };

  let unlockPadding = function () {
    fixBlocks.forEach((el) => {
      el.style.removeProperty("margin-right");
    });

    document.body.style.removeProperty("margin-right");
  };
}

export default mobileNav;
