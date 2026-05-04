//main.mjs

function handleSubmit(event) {
    event.preventDefault(); //🍎
    console.log("Hola Mundo: Manejado");
}

//El $ es una convención o estándar en donde no es solo un trozo de HTML, sino todo el objeto del DOM.
const $form = document.querySelector("form");
$form.addEventListener("submit", handleSubmit);