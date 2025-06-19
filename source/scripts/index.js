/* в этот файл добавляет скрипты*/
function toggleMenu() {
  const btn = document.getElementById('toggle-button');
  const menu = document.getElementById('toggle-menu');
  btn.classList.toggle('toggle--open');
  menu.classList.toggle('navigation-list--closed');
}

document.addEventListener('load', () => {
  toggleMenu();
});
