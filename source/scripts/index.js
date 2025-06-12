/* в этот файл добавляет скрипты*/

function toggleMenu() {
  const btn = document.getElementById('header-menu');
  const menu = document.getElementById('header-navigation');
  btn.classList.toggle('toggle-button--open');
  menu.classList.toggle('header__navigation--open');
}

window.onload(() => {
  toggleMenu();
});
