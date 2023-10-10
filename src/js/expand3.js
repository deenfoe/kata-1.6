const expand3 = document.querySelector('.expand3');
const catContainer = document.querySelector('.openup');
let img = expand3.querySelector('.expand__img-icon');
let text = expand3.querySelector('span');


expand3.addEventListener('click', function () {
    if (text.textContent === 'Показать все') {
        catContainer.style.height = '100%'
        text.textContent = 'Скрыть'
        img.style.transform = 'rotate(180deg)'
    } else {
        catContainer.style.height = '200px'
        text.textContent = 'Показать все'
        img.style.transform = 'rotate(0deg)'
    }
});