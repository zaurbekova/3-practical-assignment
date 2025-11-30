const swiperContainer = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: true,
});


let MENUlist = document.querySelector('.menu__list');
let openButton = document.querySelector('.open-button');

openButton.addEventListener('click', function(){
if(document.querySelector('.menu__list--full')){
MENUlist.classList.remove('menu__list--full')
openButton.querySelector('p').textContent = 'Показать все';
let arrow = openButton.querySelector('.open-button-icon');
arrow.src = 'ic/icon-button1.svg';
} else {
MENUlist.classList.add('menu__list--full')
openButton.querySelector('p').textContent = 'Скрыть';
let arrow = openButton.querySelector('.open-button-icon');
arrow.src = 'ic/icon-button2.svg';
}
});
	
