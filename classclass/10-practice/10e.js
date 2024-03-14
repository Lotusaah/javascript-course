document.addEventListener('DOMContentLoaded', function() {
  function click() {
    const buttonElement = document.querySelector('.js-button1');
    if (buttonElement.classList.contains('is-toggled')) {
      buttonElement.classList.remove('is-toggled');
    } else {
      buttonElement.classList.add('is-toggled');
    }
  }
const buttonElement = document.querySelector('.js-button1.button1');
buttonElement.addEventListener('click', click);
})
