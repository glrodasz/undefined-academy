//Hacer una función que imprima los números del 1 al 10, un número cada segundo.
const ONESEG = 1000;

function numberCount(num) {
    for (let i = 1; i <= num; i++) {
        setTimeout(() => {
            console.log(i);
        }, ( i+1) * ONESEG);
    }
}

numberCount(10);