/* CLASE 3 - EJERCICIO
Hacer una función que imprima los números del 1 al 10, un número cada segundo, pero usando un ciclo for con un var.
*/

const ONE_SEC_IN_MS = 1000;

function main() {
  for(var i = 1; i <= 10; i++) {
    function imprimir(i) { 
      return function() {
        console.log(i)
      }
    }
    setTimeout(imprimir(i), ONE_SEC_IN_MS * i)
  }
}
main()