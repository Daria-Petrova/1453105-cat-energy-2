/* в этот файл добавляет скрипты*/
function toggleMenu() {
  const btn = document.getElementsByClassName('toggle__button')[0];
  const menu = document.getElementsByClassName('header__navigation-list')[0];
  btn.classList.toggle('toggle--open');
  menu.classList.toggle('navigation-list--closed');
}

document.addEventListener('load', () => {
  toggleMenu();
});
