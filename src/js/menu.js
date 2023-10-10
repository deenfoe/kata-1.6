let header = document.querySelector('.header')
let menuBlock = document.querySelector('.menu__container')
let callbackBlock = document.querySelector('.callback')
let feedbackBlock = document.querySelector('.feedback')
let blurBlock = document.querySelector('.blur')
let burger = document.querySelector('.menu__nav')

const menuOpen = burger.querySelector('.burger')
const menuClose = document.querySelector('.header__nav-close')
const menuCallback = document.querySelector('.phone')
const headerCallback = header.querySelector('.call')
const menuFeeback = document.querySelector('.chat')
const headerFeedback = header.querySelector('.chat')
const callbackBlockClose = callbackBlock.querySelector('.callback__close-btn')
const feedbackBlockClose = feedbackBlock.querySelector('.feedback__close-btn')

menuOpen.addEventListener('click', function() {
  menuBlock.classList.add('active')
  blurBlock.classList.add('active__blur')
})

menuClose.addEventListener('click', function() {
  menuBlock.classList.remove('active')
  blurBlock.classList.remove('active__blur')
})

menuCallback.addEventListener('click', function() {
  callbackBlock.classList.add('active__callback')
  menuBlock.classList.remove('active')
  blurBlock.classList.add('active__blur')
})

menuFeeback.addEventListener('click', function() {
  feedbackBlock.classList.add('active__feedback')
  menuBlock.classList.remove('active')
  blurBlock.classList.add('active__blur')
})

headerCallback.addEventListener('click', function() {
  callbackBlock.classList.add('active__callback')
  blurBlock.classList.add('active__blur')
})

headerFeedback.addEventListener('click', function() {
  feedbackBlock.classList.add('active__feedback')
  blurBlock.classList.add('active__blur')
})

callbackBlockClose.addEventListener('click', function() {
  callbackBlock.classList.remove('active__callback')
  blurBlock.classList.remove('active__blur')
  })

feedbackBlockClose.addEventListener('click', function() {
  feedbackBlock.classList.remove('active__feedback')
  blurBlock.classList.remove('active__blur')
})

blurBlock.addEventListener('click', function() {
  callbackBlock.classList.remove('active__callback')
  feedbackBlock.classList.remove('active__feedback')
  menuBlock.classList.remove('active')
  blurBlock.classList.remove('active__blur')
})