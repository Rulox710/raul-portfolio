const SIDEBAR = document.getElementById('sidebar');
const MENU_HAMBURGER = document.getElementById('menuToggle');
const MENU_LINKS = document.querySelectorAll('#sidebar .link');

/**
 * Para permitir el cambio entre abierto (active) y cerrado (nada)
 * del menú lateral.
 */
function toggleMenu() {
    let isOpen = SIDEBAR.classList.toggle('active');

    MENU_HAMBURGER.setAttribute('aria-expanded', isOpen);
    MENU_HAMBURGER.setAttribute(
        'aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú'
    );
}

/**
 * Función para cerrar el menú lateral. Usada para cuando se interactúa
 * con los enlaces y no con el botón hamburguesa.
 */
function closeMenu() {
    SIDEBAR.classList.remove('active');

    MENU_HAMBURGER.setAttribute('aria-expanded', 'false');
    MENU_HAMBURGER.setAttribute('aria-label', 'Abrir menú');
}

MENU_HAMBURGER.addEventListener('click', toggleMenu);

MENU_LINKS.forEach(link => {
    link.addEventListener('click', closeMenu);
});
