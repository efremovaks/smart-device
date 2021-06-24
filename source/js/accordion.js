'use strict';


// АККОРДЕОН

var accordion = document.getElementById('accordion');
var accordionItems = accordion.querySelectorAll('.accordion__item');


accordionItems.forEach(function (item) {
  if (item.classList.contains('accordion__no-js')) {
    item.classList.remove('accordion__no-js');
  }
});


var closeItems = function () {
  accordionItems.forEach(function (item) {
    item.classList.remove('accordion__item-show');
  });
};

accordionItems.forEach(function (item) {
  item.addEventListener('click', function () {
    if (item) {
      closeItems();
      item.classList.add('accordion__item-show');
    }
  });
});
