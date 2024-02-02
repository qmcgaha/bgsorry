'use strict';

const modalOne = document.querySelector('.one');
const modalTwo = document.querySelector('.two');
const modalThree = document.querySelector('.three');
const overlay = document.querySelector('.overlay');

const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);
const openModalOne = function () {
  modalOne.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openModalTwo = function () {
  modalTwo.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openModalThree = function () {
  modalThree.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modalOne.classList.add('hidden');
  modalTwo.classList.add('hidden');
  modalThree.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal[0].addEventListener('click', openModalOne);
btnsOpenModal[1].addEventListener('click', openModalTwo);
btnsOpenModal[2].addEventListener('click', openModalThree);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (
    e.key === 'Escape' &&
    !modalOne.classList.contains('hidden') &&
    !modalTwo.classList.contains('hidden') &&
    !modalThree.classList.contains('hidden')
  ) {
    closeModal();
  }
});
