// main.mjs
function handleSubmit(event) {
  event.preventDefault();
  console.log("Hello word");
}
const $form = document.querySelector("form");
$form.addEventListener("submit", handleSubmit);
