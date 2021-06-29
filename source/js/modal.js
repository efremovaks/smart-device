'use strict';

// модалка
var body = document.querySelector('.page-body');
var btnCall = document.querySelector('.main-nav__call');
var modal = document.querySelector('.modal');
var modalClose = modal.querySelector('.modal__close');
var modalForm = modal.querySelector('form');
var formName = modalForm.querySelector('input[name=Name]');
var formTel = modalForm.querySelector('input[name=Phone]');
var formText = modalForm.querySelector('textarea[name=Message]');

// eslint-disable-next-line no-unused-vars
var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

if (btnCall) {
  btnCall.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal__show');
    body.style.overflow = ('hidden');
    body.style.padding = ('0 17px 0 0');

    if (storage) {
      formName.value = storage;
      formTel.focus();
    } else {
      formName.focus();
    }
  });
}

if (modalClose) {
  modalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal__show');
    body.style.overflow = 'auto';
    body.style.padding = ('0');
  });
}

document.addEventListener('click', function (evt) {
  var wrap = evt.target.classList.contains('modal__wrapper');
  if (!wrap) {
    return;
  }

  evt.preventDefault();
  document.querySelector('section.modal').classList.remove('modal__show');
  body.style.overflow = 'auto';
  body.style.padding = ('0');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    if (modal.classList.contains('modal__show')) {
      evt.preventDefault();
      modal.classList.remove('modal__show');
      body.style.overflow = 'auto';
      body.style.padding = ('0');
    }
  }
});

if (modalForm) {
  modalForm.addEventListener('submit', function (evt) {
    if (!formName.value || !formTel.value || !formText.value) {
      evt.preventDefault();
    } else {
      localStorage.setItem('login', formName.value);
      localStorage.setItem('login', formTel.value);
    }
  });
}
