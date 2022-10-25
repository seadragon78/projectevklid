var swiper = new Swiper(".project-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      spaceBetween: 0,
    },

    768: {
      spaceBetween: 2
    },

    1024: {
      spaceBetween: 2
    },

    1200: {
      spaceBetween: 0
    }
  },
});

let tabsSteps = document.querySelectorAll('.steps-nav__item');
let steps = document.querySelectorAll('.steps-item');

tabsSteps.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsSteps.forEach(function (btn) { btn.classList.remove('step-active') });
    e.currentTarget.classList.add('step-active');

    steps.forEach(function (element) { element.classList.remove('steps-item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('steps-item--active');
  });
});


let headerBtn = document.querySelector('.header__btn');
let closeBtn = document.querySelector('.close-block');
let sClose = document.querySelector('.close-search');
let headerForm = document.querySelector('.header-form');
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuBtn = document.querySelector('.burger__line');
let hidden = document.querySelector('.form--hidden');


headerBtn.addEventListener('click', function (e) {
  headerForm.classList.add('form--active');
  headerBtn.classList.add('.form--hidden');
});

closeBtn.addEventListener('click', function (e) {
  headerForm.classList.remove('form--active');
  headerBtn.classList.remove('.form--hidden');
})




burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
});

menuBtn.addEventListener('click', function () {
  menuBtn.classList.remove('burg-btn-active');
  burger.classList.remove('burger--active');
  menu.classList.remove('header__nav--active');
  document.body.classList.remove('stop-scroll');
})

document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion('.accordion', {
    duration: 700,
    elementClass: 'accordion__item',
    triggerClass: 'accordion__top',
    panelClass: 'accordion__bottom',
    showMultiple: false,
    collapse: false
  });
})
