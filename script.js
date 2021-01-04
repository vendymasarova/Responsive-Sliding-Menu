'use strict';
/** navigační menu */

/**seznam */
const seznamEL = document.querySelector('.seznam');
const eshopEL = document.querySelector('.eshop');
const overlay = document.querySelector('.overlay');
const closeSeznam = document.querySelector('.close-seznam');

// eshopEL.addEventListener('click', function () {
//   overlay.classList.remove('hidden');
//   seznamEL.classList.remove('hidden');
// });

//vyskakovací okénko
const showSeznamEl = function () {
  overlay.classList.remove('hidden');
  seznamEL.classList.remove('hidden');
};
const closeSeznamEl = function () {
  overlay.classList.add('hidden');
  seznamEL.classList.add('hidden');
};

eshopEL.addEventListener('click', showSeznamEl);

closeSeznam.addEventListener('click', closeSeznamEl);

closeSeznam.addEventListener('click', function () {
  overlay.classList.add('hidden');
  seznamEL.classList.add('hidden');
});

const menuSlide = function () {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const navLinks = document.querySelector('.menu li');

  burger.addEventListener('click', function () {
    menu.classList.toggle('nav-active');
    const navLinks = Array.from(document.querySelectorAll('.menu li'));
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    burger.animation;
    burger.classList.toggle('toggle');
    console.log('toggle');
  });
};

menuSlide();
