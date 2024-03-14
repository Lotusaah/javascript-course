function toggleButton(Selector) {
  const buttonElement = document.querySelector(Selector);
  
  if (!buttonElement.classList.contains('is-toggled')) {
    click();
    buttonElement.classList.add('is-toggled');
  } else {
    buttonElement.classList.remove('is-toggled');
  };

}

function click() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}
