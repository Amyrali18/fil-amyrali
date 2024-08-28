import Swiper from "swiper";

var swiper = new Swiper(".freeContent", {
  spaceBetween: 20,
  slidesPerView: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});
