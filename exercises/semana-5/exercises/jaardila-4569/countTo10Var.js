/**
 * Clase 3 [EJERCICIO]
Hacer una función que imprima los números del 1 al 10, un número cada segundo, pero usando un ciclo for con un var.
 */
const ONE_SEC_IN_MS = 1000;
const MAXIMUM_NUMBER = 10;
function mainWithVar() {
    for (var j = 1; j <= MAXIMUM_NUMBER; j++) {
        function print(j) {
            return function () {
                console.log(`con var: ${j}`)
            }
        }
        setTimeout(print(j), ONE_SEC_IN_MS * j);
    }
}

mainWithVar();