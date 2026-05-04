const formP = document.querySelector("#form");

formP.addEventListener("submit", (event) => {

  event.preventDefault();

});

// addEventListener para escuchar al evento "submit" del formulario.
// Luego llamar a la funcion  que maneja el evento y utilizar event.preventDefault();