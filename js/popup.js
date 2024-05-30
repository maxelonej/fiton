// Открывает всплывающее окно
const openPopup = (popupClass) => {
  const popup = document.querySelector(`.${popupClass}`)
  popup.classList.add('active')
}

// Закрывает всплывающее окно
const closePopup = (popupClass) => {
  const popup = document.querySelector(`.${popupClass}`)
  popup.classList.remove('active')
}
