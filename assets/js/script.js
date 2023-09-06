var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
AOS.init();
window.addEventListener("scroll", function () {
  let back = document.querySelector("#back-to-top");
  if (window.scrollY > 60) {
    back.style.display = "block";
  } else {
    back.style.display = "none";
  }
});
let backTop = document.querySelector("#back-to-top");
backTop.addEventListener("click", function () {
  window.scroll(0, 0);
});