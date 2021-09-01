function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

$(document).ready(function () {
  $(".tablinks").click(function () {
    $("tablinks").removeClass("active");
    $(this).addClass("active");
  });
});

// var swiper = new Swiper(".mySwiper5", {
//   autoplay: true,
//   loop: true,
//   slidesPerView: "auto",
//   slidesPerView: 3,
//   spaceBetween: 30,
// });

var swiper = new Swiper(".mySwiper6 ", {
  autoplay: true,
  loop: true,
  slidesPerView: "auto",
  slidesPerView: 3,
  spaceBetween: 30,
});

var swiper1 = new Swiper(".mySwiper5", {
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
