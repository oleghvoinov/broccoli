function addSlide() {
  let allCart = document
    .querySelector(".news-container__bas")
    .querySelectorAll(".news-cart");

  let wrapper = document.querySelector(".swiper-wrapper");

  allCart.forEach((element) => {
    console.log(element);
    let slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = `<div class="swiper-news__slide">
    <div class="galleru-slide"></div></div>`;
    slide.querySelector(".galleru-slide").append(element);

    wrapper.append(slide);
  });
}

export default addSlide;
