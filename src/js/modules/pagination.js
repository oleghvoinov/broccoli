function pagination(data) {
  let continer = document.querySelector(".news-container");
  // Кнопки пагинации
  let next = document.querySelector(".news-button__next");
  let prev = document.querySelector(".news-button__prev");

  let currentPage = 1;
  let rows = 8;

  if (data.length == 0) {
    console.log(data);
    continer.innerHTML = `<div class="no-item">По вашему запросу ничего не найдено...</div>`;
  } else {
    const result = Array.from(data);

    if (result.length == 0) {
      result.push(data);
    }

    removeActive();

    displayList(result, rows, currentPage);
    displayPagination(result, rows);

    function removeActive() {
      if (
        currentPage < Math.ceil(result.length / rows) &&
        next.classList.contains("no-activ")
      ) {
        next.classList.remove("no-activ");
      }

      if (currentPage >= Math.ceil(result.length / rows)) {
        next.classList.add("no-activ");
      }

      if (currentPage > 1 && prev.classList.contains("no-activ")) {
        prev.classList.remove("no-activ");
      }

      if (currentPage == 1) {
        prev.classList.add("no-activ");
      }
    }

    function displayList(arrDate, rowPerPage, page) {
      continer.innerHTML = "";
      page = page - 1;

      let start = rowPerPage * page;
      let end = start + rowPerPage;

      let arrDate1 = arrDate.slice();

      const paginatedDate = arrDate1.slice(start, end);

      paginatedDate.forEach((el) => {
        continer.appendChild(el);
      });
    }

    function displayPagination(arrData, rowPerPage) {
      const paginationEl = document.querySelector(".news-button__number");
      paginationEl.innerHTML = null;
      const pagesCount = Math.ceil(arrData.length / rowPerPage);

      for (let i = 0; i < pagesCount; i++) {
        const liEl = displayPaginationBtn(i + 1);
        paginationEl.appendChild(liEl);
      }
    }

    function displayPaginationBtn(page) {
      const liEl = document.createElement("li");
      liEl.classList.add("number__item");
      liEl.innerText = page;

      if (currentPage == page) liEl.classList.add("number__item--active");

      liEl.addEventListener("click", () => {
        currentPage = page;

        removeActive();

        displayList(result, rows, currentPage);

        let currentItemLi = document.querySelector("li.number__item--active");
        currentItemLi.classList.remove("number__item--active");

        liEl.classList.add("number__item--active");

        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      return liEl;
    }

    next.addEventListener("click", () => {
      currentPage = currentPage + 1;

      removeActive();

      displayList(result, rows, currentPage);

      let currentItemLi = document.querySelector("li.number__item--active");
      currentItemLi.classList.remove("number__item--active");

      let xpath = `//li[text()='${currentPage}']`;
      let matchingElement = document.evaluate(
        xpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;

      matchingElement.classList.add("number__item--active");

      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    prev.addEventListener("click", () => {
      currentPage = currentPage - 1;

      removeActive();

      displayList(result, rows, currentPage);

      let currentItemLi = document.querySelector("li.number__item--active");
      currentItemLi.classList.remove("number__item--active");

      let xpath = `//li[text()='${currentPage}']`;
      let matchingElement = document.evaluate(
        xpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;

      matchingElement.classList.add("number__item--active");

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

export default pagination;
