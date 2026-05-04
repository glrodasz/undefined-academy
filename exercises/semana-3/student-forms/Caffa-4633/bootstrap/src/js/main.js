// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

//Agarrar el submit del form.
function handleSubmit(event) {
    event.preventDefault(); //🍎
    console.log("Hola Mundo: Manejado");
}

//El $ es una convención o estándar en donde no es solo un trozo de HTML, sino todo el objeto del DOM.
const $form = document.querySelector("form");
$form.addEventListener("submit", handleSubmit);