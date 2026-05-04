//* 🏋Clase 2 [EJERCICIO]
// Hacer una función que imprima los números del 1 al 10, un número cada segundo.
const ONE_SEC_IN_MILISECONDS = 1000;

function countTo10(){
    for (let index = 1; index <= 10; index++) {
        setTimeout(function(){
            console.log(index)
        },ONE_SEC_IN_MILISECONDS * index)
        
    }
}

countTo10()