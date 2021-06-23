'use strict';


// АККОРДЕОН

var accordion = document.getElementById('accordion');
var accordionItems = accordion.querySelectorAll('.accordion__item-header');
var accordionContent = accordion.querySelectorAll('.accordion__item');


for (var c = 0; c < accordionContent.length; c++) {
  if (accordionContent[c].classList.contains('accordion__no-js')) {
    accordionContent[c].classList.remove('accordion__no-js');
  }
}

for (var a = 0; a < accordionItems.length; a++) {
  accordionItems[a].addEventListener('click', function () {
    accordionContent.forEach(function (element) {
      if (element) {
        element.classList.add('accordion__item-show');
      } else {
        element.classList.remove('accordion__item-show');
      }
    });
  });
}

'use strict';

// маска

var input = document.querySelectorAll('input[name=Phone]');

if (input) {
  for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('focus', function () {
      function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) {
          elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
          var range = elem.createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
        }
      }

      function mask(event) {
        // eslint-disable-next-line one-var
        var matrix = '+7(___)___-____',
          ind = 0,
          def = matrix.replace(/\D/g, ''),
          // eslint-disable-next-line no-invalid-this
          val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
          val = def;
        }
        // eslint-disable-next-line no-invalid-this
        this.value = matrix.replace(/./g, function (a) {
          // eslint-disable-next-line no-nested-ternary
          return /[_\d]/.test(a) && ind < val.length ? val.charAt(ind++) : ind >= val.length ? '' : a;
        });
        if (event.type === 'blur') {
          // eslint-disable-next-line no-invalid-this
          if (this.value.length === 2) {
            // eslint-disable-next-line no-invalid-this
            this.value = '';
          }
        } else {
          // eslint-disable-next-line no-invalid-this
          setCursorPosition(this.value.length, this);
        }
      }

      for (var x = 0; x < input.length; x++) {
        input[x].addEventListener('input', mask, false);
        input[x].addEventListener('focus', mask, false);
        input[x].addEventListener('blur', mask, false);
      }
    });
  }
}

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
    body.style.padding = ('0 18px 0 0');

    if (storage) {
      formName.value = storage;
      formTel.focus();
    } else {
      formName.focus();
    }
  });
}


modalClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal__show');
  body.style.overflow = 'auto';
  body.style.padding = ('0');
});


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

modalForm.addEventListener('submit', function (evt) {
  if (!formName.value || !formTel.value || !formText.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem('login', formName.value);
    localStorage.setItem('login', formTel.value);
  }
});

