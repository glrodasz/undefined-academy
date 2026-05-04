/* La función printNumbers utiliza un bucle for para iterar desde 1 hasta 10,
llamando a la función delay en cada iteración con el valor de i.
*/
function printNumbers() {
  for (var i = 1; i <= 10; i++) {
    delay(i);
  }
}

// La función delay utiliza setTimeout para programar la función anónima que imprime el valor de i después de un retardo de i * 1000 milisegundos.
function delay(i) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

printNumbers();
