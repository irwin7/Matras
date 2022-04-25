const navListItems = ['Katalog', 'Aksiya', 'Biz haqimizda', 'Manzilimiz', 'Aloqa'];
const navList = document.querySelector('.nav__list');
for (i of navListItems) {
  navList.innerHTML += `<li>${i}</li>`
}

// modal
const modalEl = document.querySelector('.header__modal');
const modalOpen = document.querySelector('.header__burger');
const modalClose = document.querySelector('.header__close');
modalOpen.addEventListener('click', () => {
  modalEl.style.display = 'block';
  modalOpen.style.display = 'none';
  modalClose.style.display = 'block';
})
modalClose.addEventListener('click', () => {
  modalEl.style.display = 'none';
  modalOpen.style.display = 'block';
  modalClose.style.display = 'none';
})
const modalList = document.querySelector('.modal__list');
for (i of navListItems) {
  modalList.innerHTML += `<li>${i}</li>`
}

// modals
const modals = document.querySelector('.header__modals');
const modalsOpen = document.querySelector('.modals__open');
const modalsOpen2 = document.querySelector('.modal__btn');
const modalsClose = document.querySelector('.modals__close');
const modalsClose2 = document.querySelector('.wrap__close');
const modalsClose3 = document.querySelector('.wrap__btn');
modalsOpen.addEventListener('click', () => {
  modals.style.display = 'block';
})
modalsOpen2.addEventListener('click', () => {
  modals.style.display = 'block';
})
modalsClose.addEventListener('click', () => {
  modals.style.display = 'none';
})
modalsClose2.addEventListener('click', () => {
  modals.style.display = 'none';
})
modalsClose3.addEventListener('click', () => {
  modals.style.display = 'none';
})
const modalsInner = document.querySelector('.modals__inner');
const modalsWrapper = document.querySelector('.modals__wrapper');
const modalsSubmit = document.querySelector('.form__btn');
modalsSubmit.addEventListener('click', () => {
  modalsInner.style.display = 'none';
  modalsWrapper.style.display = 'block';
})
