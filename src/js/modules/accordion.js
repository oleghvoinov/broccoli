class GraphAccordion {
  constructor(selector, options) {
    let defaultOptions = {
      isOpen: () => {},
      isClose: () => {},
      speed: 300,
    };

    this.options = Object.assign(defaultOptions, options);
    this.accordion = document.querySelector(selector);

    this.control = this.accordion.querySelector(".accordion__control");
    this.content = this.accordion.querySelector(".accordion__content");
    this.event();
  }

  event() {
    //console.log("event!");

    if (this.accordion) {
      this.control.addEventListener("click", (e) => {
        if (this.accordion.classList.contains("open")) {
          this.close();
        } else {
          let allAccordion = document.querySelectorAll(".accordion");
          allAccordion.forEach((el) => {
            el.classList.remove("is-open");
            el.classList.remove("open");
          });
          this.open();
          this.accordion.classList.add("open");
        }
      });
    }
  }

  open() {
    this.accordion.style.setProperty(
      "--accordion-time",
      `${this.options.speed / 1000}s`
    );
    this.accordion.classList.add("is-open");

    this.options.isOpen(this);
  }

  close() {
    this.accordion.classList.remove("is-open");
    this.accordion.classList.remove("open");

    this.options.isClose(this);
  }
}

export default GraphAccordion;
