const openBtn = document.querySelector('.burger-menu__button');
const closeBtn = document.querySelector('.close-menu');
const nav = document.querySelector('.nav');
const body = document.body;


openBtn.addEventListener('click', function() {
    nav.classList.add('nav--open');
    body.classList.add('modal-open');
});

closeBtn.addEventListener('click', function() {
    nav.classList.remove('nav--open')
    body.classList.remove('modal-open');
});