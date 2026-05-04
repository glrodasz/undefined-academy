// main.mjs
function handleSubmit(event) {
    event.preventDefault(); //
    console.log("Hola mundo, lo saluda DameAsado!");
   }
   const $form =
   document.querySelector("form");
   $form.addEventListener("submit",
   handleSubmit);