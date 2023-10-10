const expand = document.querySelector('.expand');
const catContainer = document.querySelector('.cat__container');
let img = expand.querySelector('.expand__img-icon');
let text = expand.querySelector('span');


expand.addEventListener('click', function () {
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