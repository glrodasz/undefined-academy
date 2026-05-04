// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


function handleSubmit(event) {
    event.preventDefault(); 
    console.log("Hola mundo");
}

const $form = 
document.querySelector("form");
$form.addEventListener("submit", handleSubmit);