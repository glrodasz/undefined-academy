// Prevenir el evento del formulario por defecto
const form = document.getElementById('form');

form.addEventListener("submit", event => {
   event.preventDefault();
});

// Menú Hamburguesa
const nav = document.getElementById('nav');
const hamburg = document.querySelector('.nav-bar-hamburg');

hamburg.addEventListener('click', () => {
   nav.classList.toggle('show');
   // console.log('hola');
});
