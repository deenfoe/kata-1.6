const readMore = document.querySelector('.info__about');
const infoAbout = document.querySelector('.info__about_text');
let img = readMore.querySelector('.readmore__img-icon');
let text = readMore.querySelector('.info__button_expand');


readMore.addEventListener('click', function () {
  if (text.textContent === 'Читать далее') {
    infoAbout.style.height = 'auto'; // Устанавливаем auto для высоты
    infoAbout.style.overflow = 'visible'; // Устанавливаем overflow на visible или другое значение, если нужно
    text.textContent = 'Скрыть';
    img.style.transform = 'rotate(180deg)';
  } else {
    infoAbout.style.height = '160px';
    infoAbout.style.overflow = 'hidden'; // Устанавливаем overflow на hidden или другое значение, если нужно
    text.textContent = 'Читать далее';
    img.style.transform = 'rotate(0deg)';
  }
});
