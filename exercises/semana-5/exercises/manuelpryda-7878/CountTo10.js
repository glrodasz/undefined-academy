/* CLASE 2 - EJERCICIO
Hacer una función que imprima los números del 1 al 10, un número cada segundo.
*/

const ONE_SEC_IN_MS = 1000;

function main() {
  for(let i = 1; i <= 10; i++) {
    function imprimir() { console.log(i) }
    setTimeout(imprimir, ONE_SEC_IN_MS * i)
  }
}
main()