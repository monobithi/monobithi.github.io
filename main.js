// change nav style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled',
    scrollY > 0);
})

//for nav menu
const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');

    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
}

// for closing nav menu after being clicked
const nav = document.querySelector('.dropdown-menu')

nav.querySelectorAll(`li a`).forEach(navLink => {
    navLink.addEventListener('click', toggleBtn.onclick);
})

//when archive menu option is clicked
const arc_clk = document.querySelector('.archive_click');
const submenu = document.querySelector('.submenu');
const menu = document.querySelector('.dropdown-menu')
const gap = document.querySelector('.gap')

arc_clk.onclick = function() {
    submenu.classList.toggle('open')
    menu.classList.toggle('openup')
    gap.classList.toggle('openup')
}
