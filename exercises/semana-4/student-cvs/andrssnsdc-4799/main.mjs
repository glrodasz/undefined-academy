function handleSubmit(event) {
    event.preventDefault(); //
    console.log("Hola mundo");
   }
   const $form =
   document.querySelector("form");
   if ($form) {
    $form.addEventListener("submit", handleSubmit);
  } else {
    console.log("No se encontró un formulario en la página");
  }
  

   import humanizarFecha from "./script/humanizar_fechas";
   function humanizarFechas($dates, i) {
    const datetime = $dates.getAttribute("datetime");
    const humanizedDate = humanizarFecha(datetime);
  
    const fechaEscrita = `Publicado  ${humanizedDate}`;
    const contenidoAntiguo = $dates.textContent;
    $dates.textContent = `${fechaEscrita}`;
  }
   const $dates = document.querySelectorAll("time");
   $dates.forEach(humanizarFechas);
