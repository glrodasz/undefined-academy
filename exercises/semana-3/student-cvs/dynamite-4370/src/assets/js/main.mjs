const $form = document.querySelector("form");
$form.addEventListener("submit", handleSubmit);

const buttonOpen = document.querySelector("#button-open");
const buttonClosed = document.querySelector("#button-closed"); 
const mobileMenu = document.querySelector("#mobile-menu");

buttonOpen.addEventListener("click", toggleMenu);
buttonClosed.addEventListener("click", toggleMenu);

function handleSubmit(event) {
    event.preventDefault(); //
    console.log("Hola mundo");
}

function toggleMenu() {
    mobileMenu.classList.remove('inactive');
    mobileMenu.classList.add('navbar-transparent');
    mobileMenu.classList.toggle('show-navbar');
}