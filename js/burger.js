const burger = document.querySelector('.burger')
const openBurger = document.querySelector('.burger-open')
const closeBurger = document.querySelector('.burger-close')

// Открыть
burger.addEventListener('click', () => {
  openBurger.classList.add('active')
})

// Закрыть
closeBurger.addEventListener('click', () => {
  openBurger.classList.remove('active')
})

// При нажатии на ссылку -> скрывать бургер меню
const burgerNav = document.querySelector('.burger-open nav')
burgerNav.addEventListener('click', () => openBurger.classList.remove('active'))

const burgerLinks = document.querySelector('.burger-open .img-links')
burgerLinks.addEventListener('click', () => openBurger.classList.remove('active'))