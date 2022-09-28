const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const valueCounter = document.querySelector('#value');

let value = 0;

const valueDecrement = () => {
  value -= 1;
  return (valueCounter.textContent = value);
};

const valueIncrement = () => {
  value += 1;
  return (valueCounter.textContent = value);
};

buttonDecrement.addEventListener('click', valueDecrement);
buttonIncrement.addEventListener('click', valueIncrement);
