// Ejercicio 02 - Semana 05: Hacer una funcion que imprima los numeros del 1 al 10, un numero cada segundo

const SECOND_IN_MS = 1000


function imprimirNumero(){
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (let i = 0; i < numeros.length; i++ ){
        setTimeout(function(){
            console.log(numeros[i]);
        }, (i + 1)*SECOND_IN_MS)
    }
}

imprimirNumero();