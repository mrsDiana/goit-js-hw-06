function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBody = document.querySelector('body');
const changeColorButton = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

const changeColorClick = () => {
  colorBody.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
};

changeColorButton.addEventListener('click', changeColorClick);
