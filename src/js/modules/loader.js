function loader() {
  const loader = document.querySelector("#loader");
  const body = document.querySelector("body");
  const fixBlocks = document.querySelectorAll(".fix-block");

  function getScrollbarWidth() {
    // Creating invisible container
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.overflow = "scroll"; // forcing scrollbar to appear
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement("div");
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;
  }

  let lockPadding = function () {
    let paddingOffset = getScrollbarWidth() + "px";
    console.log(paddingOffset);
    fixBlocks.forEach((el) => {
      el.style.marginRight = paddingOffset;
    });

    body.style.marginRight = paddingOffset;
  };

  let unlockPadding = function () {
    fixBlocks.forEach((el) => {
      el.style.removeProperty("margin-right");
    });

    body.style.removeProperty("margin-right");
  };

  lockPadding();

  window.addEventListener("load", () => {
    setTimeout(() => {
      unlockPadding();
      body.classList.remove("no-scroll");

      loader.classList.add("loader-wrapper--hidden");
    }, 1000);
  });
}

export default loader;
