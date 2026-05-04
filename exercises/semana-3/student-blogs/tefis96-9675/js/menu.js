const btnMenu = document.querySelector('.buttonMenu');
const menuHamb = document.querySelector('.menuhidden');
const body = document.querySelector('body');


btnMenu.addEventListener('click', showMenu);
window.addEventListener('mousedown', hideMenu);

function showMenu() {
    menuHamb.classList.toggle("showMenu");
}

function hideMenu(e) {
    if (!menuHamb.contains(e.target) || isMenuOption(e.target)) {
        if (isMenuOption(e.target)) {
            e.preventDefault(); 
            window.location.href = e.target.href;
        }
        menuHamb.classList.remove('showMenu');
    }
}

function isMenuOption(target) {
    const menuOptions = menuHamb.querySelectorAll('a');
    return Array.from(menuOptions).some(option => option === target || option.contains(target));
}