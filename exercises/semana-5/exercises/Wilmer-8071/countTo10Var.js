// Ejercicio 03 - Semana 05: Realizar el mismo ejercicio anterior con ciclo for y declarar con VAR

const SECOND_IN_MS1 = 1000
    
    function imprimirNumero1(){
        const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            for (var i = 0; i < numeros.length; i++ ){
                (function(index){
                    setTimeout(function(){
                    console.log(numeros[index]);
                }, (i + 1)*SECOND_IN_MS1);
            })(i);

        }
    }
    imprimirNumero1();