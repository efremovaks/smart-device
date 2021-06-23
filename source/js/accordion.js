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
