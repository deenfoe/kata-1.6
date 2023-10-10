// const callbackPopup = document.querySelector('.phone');
// const callbackPopupBack = document.querySelector('.callback');
// const closeBtn = callbackPopupBack.querySelector('.callback__close-btn');
// const closeBlur = document.querySelector('.blur');

// // Функция для открытия меню
// function openCallback() {
//   callbackPopup.classList.add('active__callback');
//   closeBlur.classList.add('active__blur'); // Добавляем класс к фону
// }

// // Функция для закрытия меню
// function closeCallback() {
//   callbackPopup.classList.remove('active__callback');
//   closeBlur.classList.remove('active__blur'); // Удаляем класс у фона
// }

// // Открываем меню при клике на .chat
// callbackPopup.addEventListener('click', openCallback);

// // Закрываем меню при клике на кнопку закрытия
// closeBtn.addEventListener('click', closeCallback);

// // Закрываем меню при клике на фон (blur)
// closeBlur.addEventListener('click', closeCallback);
// Общие переменные и элементы
const phonePopup = document.querySelector('.phone'); // Замените на нужный селектор
const phonePopupBack = document.querySelector('.callback'); // Замените на нужный селектор
const phoneCloseBtn = phonePopupBack.querySelector('.callback__close-btn');
const phoneCloseBlur = document.querySelector('.blur');

// Функция для открытия меню для .phone
function openPhonePopup() {
  phonePopupBack.classList.add('active__callback');
  phoneCloseBlur.classList.add('active__blur');
}

// Функция для закрытия меню для .phone
function closePhonePopup() {
  phonePopupBack.classList.remove('active__callback');
  phoneCloseBlur.classList.remove('active__blur');
}

// Открываем меню для .phone при клике на .phone
phonePopup.addEventListener('click', openPhonePopup);

// Закрываем меню для .phone при клике на кнопку закрытия
phoneCloseBtn.addEventListener('click', closePhonePopup);

// Закрываем меню для .phone при клике на фон (blur)
phoneCloseBlur.addEventListener('click', closePhonePopup);
