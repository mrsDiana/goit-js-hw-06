const form = document.querySelector('.login-form');
let information = {
  email: "",
  password: "",
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Всі поля повинні бути заповнені');
    return;
  }

  information.email = email.value;
  information.password = password.value;
  console.log(information);
  event.currentTarget.reset();
});
