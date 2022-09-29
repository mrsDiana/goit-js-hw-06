function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startWidthValue = 10;
const startHeightValue = 10;
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const listOfElement = document.querySelector('#boxes');
const inputValue = document.querySelector('#controls').querySelector('input');

const createBlock = () => {
  let arrayOfNumbers = [];
  for (let i = 1; i <= inputValue.value; i += 1) {
    const divElement = document.createElement('div');
    const widthValue = startWidthValue * i;
    const heightValue = startHeightValue * i;
    divElement.style.background = getRandomHexColor();
    divElement.style.width = `${widthValue}px`;
    divElement.style.height = `${heightValue}px`;
    arrayOfNumbers.push(divElement);
  }
  listOfElement.prepend(...arrayOfNumbers);
};

const reset = () => {
  listOfElement.innerHTML = '';
};

buttonCreate.addEventListener('click', createBlock);
buttonDestroy.addEventListener('click', reset);
