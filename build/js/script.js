'use strict';


var btnCall = document.querySelector('.main-nav__call');
var modal = document.querySelector('.modal');
var modalClose = modal.querySelector('.modal__close');
var modalForm = modal.querySelector('form');
var formName = modalForm.querySelector('input[name=Name]');
var formTel = modalForm.querySelector('input[name=Phone]');
var formText = modalForm.querySelector('textarea[name=Message]');

console.log('sdsdsdsd')

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

btnCall.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal__show');

  if (storage) {
    formName.value = storage;
    formTel.focus();
  } else {
    formName.focus();
  }
});

modalClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal__show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    if (modal.classList.contains('modal__show')) {
      evt.preventDefault();
      modal.classList.remove('modal__show');
    }
  }
});

modalForm.addEventListener('submit', function (evt) {
  if (!formName.value || !formTel.value || !formText.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem('login', formName.value);
    localStorage.setItem('login', formTel.value);
  }
});
