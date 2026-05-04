// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

var form = document.getElementById('my-form');

form.addEventListener('submit', function(event) {
    // Evita el comportamiento predeterminado del formulario de enviar la página
    event.preventDefault();
    console.log("Hola Mundo!"); 
});