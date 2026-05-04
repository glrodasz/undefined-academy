/**
 * Ejercicio
Hacer una función que imprima los números
del 1 al 10, un número cada segundo, pero
usando un ciclo for con un var .
 */

const ONE_SEC_IN_MS = 1000;

function printNumbers() {

  for (var i = 1; i <= 10; i++) {

    function imprimir(i) {       
      return () => console.log(i)
    }

    setTimeout(imprimir(i), i * ONE_SEC_IN_MS);
  }
}

printNumbers();