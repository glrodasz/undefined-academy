
const ONE_SEC_IN_MS = 1000;

function main() {
    
    for (var i = 1; i <= 10; i++) {
        function imprimir(i) {
         return function() { //closure va a recordar el valor, incluso si se ejecuto después.
            console.log(i); // La variable i se guarda en la funcion envolvente.
         }    
        }
        setTimeout(imprimir(i), ONE_SEC_IN_MS * i)
    }
}

main();

// Closures: una clausura permite acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada.


