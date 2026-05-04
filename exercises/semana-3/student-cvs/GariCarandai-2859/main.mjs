// main.mjs
function handleSubmit(event) {
  event.preventDefault();
  //console.log(event);
}
const $form = document.querySelector("form");
$form.addEventListener("submit", handleSubmit);