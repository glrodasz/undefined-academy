//Hacer una función que imprima los números del 1 al 10, un número cada segundo, pero usando un ciclo for con un var.

const ONESEG = 1000;
function numberCount(num) {
    for (var i = 1; i <= num; i++) {
        let count = i;
        setTimeout(() => {
            console.log(count);
        }, (i+1) * ONESEG, i);
    }
}

numberCount(10);