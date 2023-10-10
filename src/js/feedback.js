const feedbackPopup = document.querySelector('.chat');
const feedbackPopupBack = document.querySelector('.feedback');
const closeBtn = feedbackPopupBack.querySelector('.feedback__close-btn');
const closeBlur = document.querySelector('.blur');

// Функция для открытия меню
function openFeedback() {
  feedbackPopupBack.classList.add('active__feedback');
  closeBlur.classList.add('active__blur'); // Добавляем класс к фону
}

// Функция для закрытия меню
function closeFeedback() {
  feedbackPopupBack.classList.remove('active__feedback');
  closeBlur.classList.remove('active__blur'); // Удаляем класс у фона
}

// Открываем меню при клике на .chat
feedbackPopup.addEventListener('click', openFeedback);

// Закрываем меню при клике на кнопку закрытия
closeBtn.addEventListener('click', closeFeedback);

// Закрываем меню при клике на фон (blur)
closeBlur.addEventListener('click', closeFeedback);
