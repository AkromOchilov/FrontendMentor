const button = document.querySelector('.filter__cancel-btn');
const menu = document.querySelector('.filter-container');
const curtain = document.querySelector('.curtain');
const cancel = document.querySelector('.cancel');
const hemburger = document.querySelector('.hamburger');

button.addEventListener('click', () => {
	menu.classList.toggle('menu-on');
});
button.addEventListener('click', () => {
	curtain.classList.toggle('menu-on');
});
button.addEventListener('click', () => {
	cancel.classList.toggle('menu-on');
});
button.addEventListener('click', () => {
	hemburger.classList.toggle('menu-off');
});
