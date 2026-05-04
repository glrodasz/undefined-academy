// Crear una función que imprima los números del 1 al 10 cada segundo
const ONE_SECOND_IN_MS = 1000;

function numbersOneToTenPrintedEverySecond() {
    for (let i = 1; i <= 10; i++) {
        setTimeout(() => {
            console.log(i)
        }, ONE_SECOND_IN_MS * i);
    }
}
  
numbersOneToTenPrintedEverySecond();