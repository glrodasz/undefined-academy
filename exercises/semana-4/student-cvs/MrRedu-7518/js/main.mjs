// Prevenir el comportamiendo predeterminado del envio del formulario
function handleSubmit(event) {
    event.preventDefault(); 
    alert("¡Gracias por su mensaje!");
   }
   
const $form =  document.querySelector("form");
$form.addEventListener("submit", handleSubmit);