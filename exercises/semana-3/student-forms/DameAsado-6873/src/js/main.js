// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// main.mjs
function handleSubmit(event) {
    event.preventDefault(); //
    console.log("Hola mundo, lo saluda DameAsado!");
   }
   const $form =
   document.querySelector("form");
   $form.addEventListener("submit",
   handleSubmit);