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
