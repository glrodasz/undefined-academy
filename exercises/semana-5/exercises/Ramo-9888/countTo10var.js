//* 🏋Clase 3 [EJERCICIO]
//Hacer una función que imprima los números del 1 al 10, un número cada segundo, pero usando un ciclo for con un var.

const ONE_SEC_IN_MILISECONDS = 1000;

function countTo10(){
    for (var index = 1; index <= 10; index = index + 1) {
        
        function print(index){
            return function() {
                console.log(index)
            }
        }
        
        setTimeout(print(index), ONE_SEC_IN_MILISECONDS * index)
        
    }
}

countTo10()