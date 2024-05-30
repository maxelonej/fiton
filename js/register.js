const form = document.getElementById('form')
const username = document.getElementById('name')
const surname = document.getElementById('surname')
const email = document.getElementById('email')
const phone = document.getElementById('tel')
const birthDate = document.getElementById('birth-date')
const password = document.getElementById('password')
const passwordAgain = document.getElementById('password-again')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  checkInputs()
})

function checkInputs() {
  const usernameValue = username.value.trim()
  const surnameValue = surname.value.trim()
  const emailValue = email.value.trim()
  const phoneValue = phone.value.trim()
  const birthDateValue = birthDate.value.trim()
  const passwordValue = password.value.trim()
  const passwordAgainValue = passwordAgain.value.trim()

  usernameValue === '' ? setError : setSuccess
  surnameValue === '' ? setError : setSuccess
  emailValue === '' ? setError : setSuccess
  phoneValue === '' ? setError : setSuccess
  birthDateValue === '' ? setError : setSuccess
  passwordValue === '' ? setError : setSuccess
  passwordAgainValue === '' ? setError : setSuccess
  passwordAgainValue !== passwordValue ? setError : setSuccess
}

const formInput = document.querySelector('.form-input')

const setError = () => {
  formInput.className = '.form-input .error'
}

const setSuccess = () => {
  formInput.className = '.form-input .success'
}


