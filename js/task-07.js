const valueInput = document.querySelector('#font-size-control');
const textChange = document.querySelector('#text');

const changeRange = () => {
    textChange.style.fontSize = `${valueInput.value}px`;
}

valueInput.addEventListener('input', changeRange)
