// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//Se define una constante que haga referecia al formularios mediante su "id" contact-form
const form = document.getElementById("contact-form");

//Le asignamos un evento escucha para que esté atento al momento de que la página realice un "Submit", cuando el usuario envie su formulario
form.addEventListener("submit", function(event) {
    //Al momento de que enviamos el formulario se ejecuta la función "event" haciendo referencia al comportamiento de la página
    //A éste evento se le da el preventDefault para cancelar el comportamiento de la página
    event.preventDefault();
    //Se escribe en la consola todos los datos referentes al envío del formulario para comprobar su envío
    console.log(event);
    //Se muestra un mensaje en la pantalla indicando el envío del formulario
    alert("Tus datos han sido enviados correctamente");
    //Se reinicia el formulario para que pueda volver a ser enviado
    form.reset();
}
)