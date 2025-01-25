// script.js
const hamburger = document.getElementById('hamburger'); // Botão de hambúrguer
const menu = document.getElementById('menu'); // Menu de navegação

// Evento de clique no botão
hamburger.addEventListener('click', () => {
  // Alterna entre mostrar e esconder o menu
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});



/* submenu */
const aboutMenuItem = document.getElementById('aboutMenuItem');

// Quando a opção "Sobre" for clicada
aboutMenuItem.addEventListener('click', () => {
  // Adiciona ou remove a classe 'active' para mostrar/esconder o submenu
  aboutMenuItem.classList.toggle('active');
});
