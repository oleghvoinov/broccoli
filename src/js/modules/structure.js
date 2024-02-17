function createTree(container, container2) {
  container.innerHTML = createTreeText(container2, 1);
}

function testH2(node) {
  if (node.tagName == "H2") {
    return node.textContent;
  }
}

function createTreeText(container, i) {
  // отдельная рекурсивная функция
  let li = "";
  let ul;
  for (let node of container.childNodes) {
    if (node.tagName) {
      if (node.tagName == "H2") {
        node.setAttribute("id", i);
        li +=
          "<li class=structure__content-item><i></i><a href=#" +
          i++ +
          ">" +
          testH2(node) +
          createTreeText(node) +
          "</a></li>";
      } else if (node.tagName == "DIV") {
        li += "<li>" + createTreeText(node, i * 0.1 + i) + "</li>";
      }
    }
  }
  if (li) {
    ul = "<ul>" + li + "</ul>";
  }
  return ul || "";
}

window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;

  if (window.innerWidth > 768) {
    document.querySelectorAll(".content-wrapper h2").forEach((el, i) => {
      if (el.offsetTop <= scrollDistance) {
        document
          .querySelectorAll(".structure__content-item i")
          .forEach((el) => {
            if (el.classList.contains("active")) {
              el.classList.remove("active");
            }
          });

        document
          .querySelectorAll(".structure__content-item i")
          [i].classList.add("active");
      }
    });
  }
});

export default createTree;
