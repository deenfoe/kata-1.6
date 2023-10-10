const expand2 = document.querySelector('.expand2');
const catContainer = document.querySelector('.cat2__container');
let img = expand2.querySelector('.expand__img-icon');
let text = expand2.querySelector('span');


expand2.addEventListener('click', function () {
    if (text.textContent === 'Показать все') {
        catContainer.style.height = '100%'
        text.textContent = 'Скрыть'
        img.style.transform = 'rotate(180deg)'
    } else {
        catContainer.style.height = '168px'
        text.textContent = 'Показать все'
        img.style.transform = 'rotate(0deg)'
    }
});