const valueInput = document.querySelector('#validation-input');
const lengthInput = document.querySelector('input[data-length="6"]');

const changeColorOfBorder = event => {
  if (valueInput.value.length === Number(lengthInput.dataset.length)) {
    valueInput.classList.add('valid');
    valueInput.classList.remove('invalid');
    return;  }
  valueInput.classList.add('invalid');
  valueInput.classList.remove('valid');
};

valueInput.addEventListener('blur', changeColorOfBorder);
