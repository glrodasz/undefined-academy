// Crear una función que imprima los números del 1 al 10 cada segundo utilizando un bucle for con un var
const ONE_SECOND_IN_MS = 1000;

function numbersOneToTenPrintedEverySecond() {
    for (var i = 1; i <= 10; i++) {
        function printNumber(i) {
            return function() {
                console.log(i);
            }
        }
        
        setTimeout(printNumber(i), ONE_SECOND_IN_MS * i);
    }
}
  
numbersOneToTenPrintedEverySecond();