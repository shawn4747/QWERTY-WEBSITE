var swiper = new Swiper(".mySwiper3", {
  autoplay: true,
  loop: true,
  slidesPerView: "auto",
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper1 = new Swiper(".mySwiper3", {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    468: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 27,
    },
  },
});
