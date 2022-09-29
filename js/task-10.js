function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startWidthValue = 30;
const startHeightValue = 30;
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const listOfElement = document.querySelector('#boxes');
const inputValue = document.querySelector('#controls').querySelector('input');

const createBoxes = () => {
  let arrayOfNumbers = [];
  for (let i = 1; i <= inputValue.value; i += 1) {
    const divElement = document.createElement('div');
    const widthValue = startWidthValue + i*10;
    const heightValue = startHeightValue + i*10;
    divElement.style.background = getRandomHexColor();
    divElement.style.width = `${widthValue}px`;
    divElement.style.height = `${heightValue}px`;
    arrayOfNumbers.push(divElement);
  }
  listOfElement.prepend(...arrayOfNumbers);
};

const destroyBoxes = () => {
  listOfElement.innerHTML = '';
};

buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);
