import pagination from "./pagination.js";

function search(data) {
  const cartTitle = document.querySelectorAll(".news-cart__title p");
  const cartTeg = document.querySelectorAll(".news-cart__teg");
  let searchInput = document.querySelector(".search__line");
  let searchOption = document.querySelector(".presearch__title");
  let presearchTegs = document.querySelector(".presearch__tegs");
  let searchContiner = document.querySelector(".search__container");
  let tegCart = document.querySelectorAll(".news-cart__teg");
  let searchButton = document.querySelector("#search__button");
  let up = document.querySelector("#up");
  let low = document.querySelector("#low");

  let data1 = Array.from(data);
  let data2 = new Array();

  data1.forEach((el) => {
    data2.push(el.cloneNode(true));
  });

  const result = Array.from(cartTitle);
  const resultTeg = Array.from(cartTeg);

  function getOptions(word, result) {
    return result.filter((s) => {
      const regex = new RegExp(word, "gi");
      return s.innerText.match(regex);
    });
  }

  function getOptionsForCart(word, result) {
    return result.filter((s) => {
      const regex = new RegExp(word, "gi");
      let sTitle = s.querySelector(".news-cart__title p");
      sTitle = s.innerText.match(regex);
      return s;
    });
  }

  function displayOption() {
    const options = getOptions(searchInput.innerText, result);
    addCloseBtn();
    const html = options
      .map((station) => {
        const regex = new RegExp(searchInput.innerText, "gi");
        const stationName = station.innerHTML.replace(
          regex,
          `<span class = "hl">${searchInput.innerText}</span>`
        );

        return `<li class="presearch__title-item"><a>${stationName}</a></li>`;
      })
      .slice(0, 7)
      .join("");

    searchOption.innerHTML = searchInput.innerText ? html : null;
    removePresearch(searchOption);

    searchOption
      .querySelectorAll(".presearch__title-item")
      .forEach((element) => {
        element.addEventListener("click", () => {
          searchInput.innerText = element.innerText;
          searchOption.innerHTML = null;
          removePresearch(searchOption);

          const result = Array.from(data2);

          result.every((el) => {
            console.log(
              el.querySelector(".news-cart__title p").innerText.length
            );
            console.log(element.innerText.length);
            if (
              el.querySelector(".news-cart__title p").innerText.toLowerCase() ==
              element.innerText.toLowerCase()
            ) {
              console.log(el.querySelector(".news-cart__title p").innerText);
              console.log(element.innerText);
              pagination(el);
              return false;
            }
            return true;
          });
        });
      });
  }

  function displayTeg() {
    const options = getOptions(searchInput.innerText, resultTeg);
    addCloseBtn();
    let option2 = new Array();

    options.forEach((itemm) => {
      option2.push(itemm.innerText);
    });

    let optionNoReplay = option2.filter((item, index) => {
      return option2.indexOf(item) === index;
    });

    const html = optionNoReplay
      .map((station) => {
        const regex = new RegExp(searchInput.innerText, "gi");
        const stationName = station.replace(
          regex,
          `<span class = "lh">${searchInput.innerText}</span>`
        );

        return `<li class="presearch__tegs-item"><a>${stationName}</a></li>`;
      })
      .slice(0, 7)
      .join("");

    // let htmlNoReplay = Array.from(html).filter((item, index) => {
    //   return html.indexOf(item) === index;
    // });

    presearchTegs.innerHTML = searchInput.innerText ? html : null;
    removePresearch(presearchTegs);
    presearchTegs
      .querySelectorAll(".presearch__tegs-item")
      .forEach((el) => searchTeg(el));
  }

  function displayOptionClear() {
    setTimeout(() => {
      searchOption.innerHTML = null;
      presearchTegs.innerHTML = null;
      removePresearch(searchOption);
      removePresearch(presearchTegs);
    }, 200);
  }

  function removePresearch(searchOption) {
    if (searchOption.innerHTML == "") {
      if (searchOption.classList.contains("presearch--none")) {
      } else {
        searchOption.classList.add("presearch--none");
      }
    }

    if (
      searchOption.innerHTML != "" &&
      searchOption.classList.contains("presearch--none")
    ) {
      searchOption.classList.remove("presearch--none");
    }
  }

  function addCloseBtn() {
    if (
      (searchInput.innerText != "" ||
        searchContiner.querySelector(".search__line-teg")) &&
      !searchContiner.querySelector(".close__button")
    ) {
      const button = document.createElement("button");
      button.classList.add("close__button");
      button.innerHTML = `<img src="./img/icons/cross-svgrepo-white.svg" alt="Поиск" />`;

      searchContiner.append(button);

      button.addEventListener("click", () => {
        searchInput.focus();
        delCloseBtn(button);
        searchInput.focus();

        displayOption();
      });
    }
    if (
      searchInput.innerText == "" &&
      !searchContiner.querySelector(".search__line-teg")
    ) {
      delCloseBtn(searchContiner.querySelector(".close__button"));
    }
  }

  function delCloseBtn(button) {
    if (button) {
      button.remove();
      searchInput.innerText = null;

      searchContiner.querySelectorAll(".search__line-teg").forEach((elRem) => {
        elRem.remove();
      });

      pagination(data);
    }
  }

  tegCart.forEach((element) => {
    searchTeg(element);
  });

  function searchTeg(element) {
    element.addEventListener("click", () => {
      //найдем все спаны с классом lh
      let spanLH = element.querySelectorAll(".lh");
      if (spanLH) {
        spanLH.forEach((el) => {
          el.classList.remove("lh");
        });
      }

      // создаем тег для ставки внутри поиска
      const tegInSearch = document.createElement("div");
      tegInSearch.classList.add("search__line-teg");
      tegInSearch.innerHTML = `<p class="search__line-teg__text">${element.innerHTML}</p><button class="search__line-teg__btn"><img src="./img/icons/cross-svgrepo-white.svg" alt="Поиск" /></button><p></p>`;

      // вставляем тег
      if (searchContiner.querySelector(".search__line-teg__text")) {
        let flagSearch = false;
        searchContiner
          .querySelectorAll(".search__line-teg__text")
          .forEach((ell) => {
            if (ell.innerText == element.innerText) {
              flagSearch = true;
            }
          });
        if (flagSearch) {
        } else {
          searchInput.before(tegInSearch);
        }
      } else {
        searchInput.before(tegInSearch);
      }

      // добавляем кнопку общего сброса
      if (!searchContiner.querySelector(".close__button")) {
        addCloseBtn();
      }

      // Добавляем на крестик тега событие удаления
      let tegInSearchBtn = document.querySelectorAll(".search__line-teg__btn");

      tegInSearchBtn.forEach((elBtn) => {
        elBtn.addEventListener("click", () => {
          elBtn.parentNode.remove();

          updateCartList();
        });
      });
      updateCartList();
      // функция обновления листа с картами по результату работы с тегами
      function updateCartList() {
        let conditionTeg = Array.from(
          searchContiner.querySelectorAll(".search__line-teg__text")
        );
        let allCart = Array.from(data2);

        searchInput.innerHTML = null;

        if (conditionTeg.length == 0) {
          pagination(data);
        } else {
          let arr = new Array();

          for (let i = 0; i < allCart.length; i++) {
            let cartFlag = false;
            let cartFlagforTeg;
            let submass = Array.from(
              allCart[i].querySelectorAll(".news-cart__teg")
            );

            if (conditionTeg.length == 1) {
              for (let z = 0; z < submass.length; z++) {
                for (let j = 0; j < conditionTeg.length; j++) {
                  if (
                    conditionTeg[j].innerText.toLowerCase() ==
                    submass[z].innerText.toLowerCase()
                  ) {
                    cartFlag = true;
                  } else {
                    cartFlag = false;
                  }
                }
                if (cartFlag) {
                  break;
                }
              }

              if (cartFlag) {
                arr.push(allCart[i]);
              }
            }

            if (
              conditionTeg.length != 1 &&
              conditionTeg.length <= submass.length
            ) {
              for (let z = 0; z < conditionTeg.length; z++) {
                cartFlagforTeg = false;
                for (let j = 0; j < submass.length; j++) {
                  if (
                    conditionTeg[j].innerText.toLowerCase() ==
                    submass[z].innerText.toLowerCase()
                  ) {
                    cartFlagforTeg = true;
                    break;
                  } else {
                    cartFlagforTeg = false;
                  }
                }
                if (!cartFlagforTeg) {
                  break;
                }
              }
              if (cartFlagforTeg) {
                arr.push(allCart[i]);
              }
            }
          }

          if (arr.length != 0) {
            pagination(arr);
          }
        }
      }
    });
  }

  function displayListToEnter() {
    const options = getOptionsForCart(searchInput.innerText, data2);

    const html1 = options.map((station) => {
      const regex = new RegExp(searchInput.innerText, "gi");
      const stationName = station
        .querySelector(".news-cart__title p")
        .innerHTML.replace(
          regex,
          `<span class = "hl">${searchInput.innerText}</span>`
        );
      station.querySelector(".news-cart__title p").innerHTML = stationName;
      if (station.querySelector(".hl")) {
        return station;
      } else {
        return null;
      }
    });

    let html = Array.from(html1);
    let len = html.length;
    for (let i = 0; i < len; i++) {
      html[i] && html.push(html[i]);
    }

    html.splice(0, len);

    pagination(html);
  }

  searchInput.addEventListener("focus", displayOption);

  searchInput.addEventListener("change", displayOption);

  searchInput.addEventListener("click", displayOption);

  searchInput.addEventListener("keyup", displayOption);

  searchInput.addEventListener("blur", displayOptionClear);

  searchInput.addEventListener("focus", displayTeg);

  searchInput.addEventListener("change", displayTeg);

  searchInput.addEventListener("click", displayTeg);

  searchInput.addEventListener("keyup", displayTeg);

  searchInput.addEventListener("keyup", function (e) {
    if (e.keyCode == 13 && document.activeElement === searchInput) {
      displayListToEnter();
      searchInput.blur();
    }
  });

  //searchButton.addEventListener("click", displayListToEnter());
  //searchButton.addEventListener("click");
}

export default search;
