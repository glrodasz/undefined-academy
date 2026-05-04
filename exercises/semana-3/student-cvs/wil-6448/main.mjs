// main.mjs
function handleSubmit(event) {
    event.preventDefault(); //
    console.log("Hola mundo");
}
const $form = document.querySelector(".form__contact");
$form.addEventListener("submit", handleSubmit);