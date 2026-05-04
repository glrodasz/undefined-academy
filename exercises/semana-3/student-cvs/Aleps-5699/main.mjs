function  handleSubmit (event) {
    event.preventDefault();
    console.log ("Tu respuesta ha sido enviada")
    alert ("Tu comentario ha sido enviado correctamente");
    $form.reset();
}

const $form = document.querySelector("form");
$form.addEventListener("submit" , handleSubmit);