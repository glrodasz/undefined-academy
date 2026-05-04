function handleSubmit(e) {
  event.preventDefault();
  console.log("hola mundo");
}

const $form = document.querySelector("form");

$form.addEventListener("submit", handleSubmit);
