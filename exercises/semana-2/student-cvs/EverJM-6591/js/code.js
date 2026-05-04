const btnEnviar = document.querySelector("#btn-enviar");
btnEnviar.addEventListener("click",noCargar);
function noCargar(event){
    event.preventDefault();
    alert("Aun no se puede enviar, muchas gracias :)");
}