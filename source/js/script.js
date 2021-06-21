'use strict';


var btnCall = document.querySelector('.main-nav__call');
var modal = document.querySelector('.modal');
var modalClose = modal.querySelector('.modal__close');
var modalForm = modal.querySelector('form');
var formName = modalForm.querySelector('input[name=Name]');
var formTel = modalForm.querySelector('input[name=Phone]');
var formText = modalForm.querySelector('textarea[name=Message]');

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

formTel.addEventListener('focus', function (evt) {
  evt.target.formTel.textContent = '(+7'
});


// АККОРДЕОН

var accordion = document.getElementById('accordion');
var accordionItems = accordion.querySelectorAll('.accordion__item-header');
var accordionContent = accordion.querySelectorAll('.accordion__item');


for (var c = 0; c < accordionContent.length; c++) {
  if (accordionContent[c].classList.contains('accordion_no-js')) {
    accordionContent[c].classList.remove('accordion_no-js');
  }
}


for (var i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener('click', function () {
    accordionContent.forEach(element => {
      element.classList.add('accordion__item-show');
    });
  });
}

// var activePanel;
// accordionItems.forEach(function (item) {
//   item.addEventListener('click', function () {
//     for (var i = 0; i < accordionContent.length; i++) {
//       accordionContent[i].classList.add('accordion__item-show');
//       // accordionContent[i].nextElementSibling.classList.add('accordion__item-show');
//       if (activePanel) {
//         accordionContent[i].classList.remove('accordion__item-show');
//         // activePanel.nextElementSibling.classList.remove('accordion__item-show');
//       }
//     }

//     activePanel = (activePanel === accordionContent[i]) ? 0 : accordionContent[i];
//   });
// });
