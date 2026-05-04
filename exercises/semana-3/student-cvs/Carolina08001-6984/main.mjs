const mobileMenu=document.querySelector('.mobile-menu');
console.log(mobileMenu);
mobileMenu.addEventListener('click', navResponsive);

function navResponsive(){
    console.log('desde nav-responsive');
    const navegacion=document.querySelector('.nav-menu');
    navegacion.classList.toggle('mostrar');

    const downMenu=document.querySelector('.nav-bar');
    downMenu.classList.toggle('bajar-menu');
}
function handleSubmit (event){
    event.preventDefault();
    console.log("Hola mundo");
}
const $form=document.querySelector('form');
$form.addEventListener("submit", handleSubmit);