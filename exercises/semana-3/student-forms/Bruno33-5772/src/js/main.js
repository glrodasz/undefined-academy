// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Envío de formulario
function handleSubmit(event) {    
    event.preventDefault();     
    console.log("Hola mundo."); 
} 

const $form =  document.querySelector("form"); 
$form.addEventListener("submit", handleSubmit);

// Comportamiento de la seccion laboral al seleccionarlo 
const opciones = document.getElementById('type');
const divs = document.querySelectorAll('div[id="work"]');

opciones.addEventListener('change', () => {
    const opcionSeleccionada = "work";

    if (opciones.value == "work") {
        // Mostrar el div correspondiente a la opción seleccionada
        const divMostrar = document.getElementById(opcionSeleccionada);
        divMostrar.style.display = 'block';
    } else {
        // Esconder div correspondiente
        const divMostrar = document.getElementById(opcionSeleccionada);
        divMostrar.style.display = 'none';

        // Obtener el fieldset
        var myFieldset = document.getElementById("work-fs");

        // Obtener la lista de opciones dentro del fieldset
        var opciones_fs = myFieldset.getElementsByTagName("input");

        // Recorrer la lista de opciones y deseleccionar la primera
        for (var i = 0; i < opciones_fs.length; i++) {
            if (opciones_fs[i].type == "radio" && opciones_fs[i].checked) {
                opciones_fs[i].checked = false;
                break;
            }
        }
    }
});