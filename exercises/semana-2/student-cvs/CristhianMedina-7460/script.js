// Semana 2 Clase 2
const Person = {
  name: "Cristhian",
  lastname: "Medina",
  age: 29,
  isFather: true,
  like: [
    "play with my children",
    "watch animated movies",
    "listen music",
    "play videogames"
  ]
}

typeof var1 === "object" && var1 != null; // comprueba si es un objeto, valida que no sea null debido a que el tipo null es un objeto.

typeof var1 === "object" && var1.length != null; // comprueba si es un array, valida que la propiedad length sea valida.

Array.isArray(var1); // forma actual de validar un array.

// Semana 2 Clase 4

function stopAction(event) {
  event.preventDefault();
}