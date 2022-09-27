const resultInput = document.querySelector('#name-input');
const nameInput = document.querySelector('#name-output');
console.log(resultInput.value);
let rezultoutput = '';

const an = 'anon';

// console.log(resultInput.textContent);

const handleClick = event => {
  if (nameInput.textContent.length === 0) {
    console.log(nameInput.textContent.length);
    // return resultInput.removeEventListener("keydown", handleClick );
    return (nameInput.textContent = 'Anonymous');
  } else if (event.code.toLowerCase() === 'backspace') {
    console.log(nameInput.textContent.length);
    return (nameInput.textContent = nameInput.textContent.substring(
      0,
      nameInput.textContent.length - 1
    ));
  }
  console.log(nameInput.textContent.length);
  rezultoutput += event.key;
  return (nameInput.textContent = rezultoutput);
};

resultInput.addEventListener('keydown', handleClick);

console.log(nameInput.textContent);
