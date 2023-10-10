function setMenuHeightToContainerHeight() {
  const menuContainer = document.querySelector('.menu__container');
  const container = document.querySelector('.container');

  if (menuContainer && container) {
    const containerHeight = container.offsetHeight; // Высота .container
    menuContainer.style.height = containerHeight + 'px'; // Устанавливаем высоту .menu__container
  }
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.addEventListener('DOMContentLoaded', setMenuHeightToContainerHeight);
window.addEventListener('resize', setMenuHeightToContainerHeight);
