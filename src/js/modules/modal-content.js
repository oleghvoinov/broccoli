function createModal(clickedElement, id) {
  //let clickedElement = document.querySelectorAll("[data-img]");
  let modal = document.querySelector(".content-wrapper");
  let isResizing = false;

  if (clickedElement) {
    clickedElement.addEventListener("click", (e) => {
      //создаем модуль контейнер
      let modalContainer = document.createElement("div");
      modalContainer.classList.add("wrapper__modal-content");
      //добавляем его в разметку
      modal.insertAdjacentElement("afterbegin", modalContainer);
      //добавляем в него контент
      modalContainer.insertAdjacentHTML(
        "afterbegin",
        `<div class="wrapper__modal-content-content"> <button class="wrapper__modal-close"><img src="./img/icons/cross-svgrepo.svg" alt="" /></button><div class="wrapper__modal-movement">
        ${clickedElement.innerHTML}
        </div> <button class="wrapper__modal-resizer"><img src="./img/icons/arrow-down.svg" alt="" /></button></div>`
      );
      if (!modalContainer.classList.contains("modal-open")) {
        modalContainer.classList.add("modal-open");
      }
      let movement = document.querySelector(".wrapper__modal-movement");
      console.log(movement);
      dragDrop(movement, modalContainer);

      let resizers = document.querySelectorAll(".wrapper__modal-resizer");

      if (resizers) {
        resizers.forEach((elll) => {
          let targetElresizing = elll.closest(".wrapper__modal-content");
          console.log(elll);
          resizable(elll, targetElresizing);
        });
      }

      let btnClose = document.querySelectorAll(".wrapper__modal-close");

      if (btnClose) {
        btnClose.forEach((ell) => {
          ell.addEventListener("click", (e) => {
            console.log(ell);
            let targetEl = ell.closest(".wrapper__modal-content");

            if (targetEl.classList.contains("modal-open")) {
              targetEl.remove();
            }
          });
        });
      }
    });
  }

  function dragDrop(movement, modal) {
    if (!isResizing) {
      modal.ondragstart = function () {
        return false;
      };
      movement.ondragstart = function () {
        return false;
      };
      movement.onmousedown = function (event) {
        let shiftX = event.clientX - modal.getBoundingClientRect().left;
        let shiftY = event.clientY - modal.getBoundingClientRect().top;

        moveAt(event.pageX, event.pageY);

        // переносит мяч на координаты (pageX, pageY),
        // дополнительно учитывая изначальный сдвиг относительно указателя мыши
        function moveAt(pageX, pageY) {
          if (
            pageX - shiftX >= 400 &&
            document.documentElement.clientWidth >
              pageX - shiftX + modal.offsetWidth + 20
          ) {
            modal.style.left = pageX - shiftX + "px";
          }

          // if (
          //   pageY - shiftY >= 80 &&
          //   document.documentElement.clientHeight >
          //     pageY - shiftY + modal.offsetHeight + 20
          // ) {

          // }
          modal.style.top = pageY - shiftY + "px";
        }

        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }

        modal.addEventListener("mousemove", onMouseMove);

        document.onmouseup = function () {
          modal.removeEventListener("mousemove", onMouseMove);
          movement.onmouseup = null;
        };

        modal.mouseout = function () {
          console.log("за пределами");
          modal.removeEventListener("mousemove", onMouseMove);
          movement.onmouseup = null;
          modal.mouseout = null;
        };
      };
    }
  }

  function resizable(resizer, modal) {
    let currentResizer;

    resizer.addEventListener("mousedown", mousedown);

    function mousedown(e) {
      currentResizer = e.target;
      isResizing = true;

      let prevX = e.clientX;
      let prevY = e.clientY;

      window.addEventListener("mousemove", mousemove);
      window.addEventListener("mouseup", mouseup);

      function mousemove(e) {
        const rect = modal.getBoundingClientRect();

        let k = rect.width / rect.height;

        modal.style.width = rect.width - (prevX - e.clientX) + "px";
        // modal.style.height = rect.height - (prevY - e.clientY) + "px";
        modal.style.height = (rect.width - (prevX - e.clientX)) / k + "px";

        prevX = e.clientX;
        prevY = e.clientY;
      }

      function mouseup(e) {
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);

        isResizing = false;
      }
    }

    resizer.ondragstart = function () {
      return false;
    };
  }
}

export default createModal;
