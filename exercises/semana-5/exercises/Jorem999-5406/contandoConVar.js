function uno() {
    for (let numero = 1; numero <= 10; numero++) {

        function imprime() {
            console.log(numero);
        }
        setTimeout(imprime, 1000 * numero);
    }
}

/// ENTENDER ESTO!!!
// SE TRATA DE QUE EL CLOSURE CONSERVA EL VALOR DE "numero"
// El closure es una función que retorna otra función
function dos() {
    for (var numero = 1; numero <= 10; numero++) {

        function imprime(numero) {
            return function() {
            console.log(numero);
            }
        }
        setTimeout(imprime(numero), 1000 * numero);
    }
}

uno();
