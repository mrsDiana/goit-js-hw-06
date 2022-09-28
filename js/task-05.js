const resultInput = document.querySelector('#name-input');
const nameInput = document.querySelector('#name-output');

const handleClick = event => {
  if (event.currentTarget.value === '') {
    return (nameInput.textContent = 'Anonymous');
  }
  return (nameInput.textContent = event.currentTarget.value);
};

resultInput.addEventListener('input', handleClick);
