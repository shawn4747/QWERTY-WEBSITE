var swiper = new Swiper(".mySwiper4", {
  autoplay: true,
  loop: true,
  spaceBetween: 5,
  slidesPerView: 5,
  centeredSlides: true,
  autoplay: {
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// var swiper1 = new Swiper(".mySwiper4", {
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     468: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     991: {
//       slidesPerView: 3,
//       spaceBetween: 27,
//     },
//   },
// });
