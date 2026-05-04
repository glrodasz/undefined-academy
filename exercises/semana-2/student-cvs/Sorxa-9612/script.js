
const form = document.querySelector("form");
console.log(form)
form.addEventListener("submit", function(event) {
       event.preventDefault();
       console.log(event);
       alert("No se pude enviar el formulario")
    }
)