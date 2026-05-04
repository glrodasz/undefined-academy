function handleSubmit(event) {
  event.preventDefault(); //Evita que se recargue la página
  console.log("Hola mundo");
}
  
const $form =document.querySelector("form");
$form.addEventListener("submit", handleSubmit);
