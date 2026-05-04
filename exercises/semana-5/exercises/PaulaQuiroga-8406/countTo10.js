// Hacer una funcion que escriba los numeros del 1 al 10, un número cada segundo.
const ONE_SEC_IN_MS = 1000;

function main() {
    for (let i = 1; i <= 10; i++) {
        function imprimir() {console.log(i)}
        setTimeout(imprimir, ONE_SEC_IN_MS * i)
    }
}

// Esta funcion va a actuar de la siguiente manera:
// setTimeout(1, ONE_SEC_IN_MS)
// setTimeout(2, ONE_SEC_IN_MS)
// setTimeout(3, ONE_SEC_IN_MS)
// setTimeout(4, ONE_SEC_IN_MS)
// ...
// setTimeout(10, ONE_SEC_IN_MS)

main();

// Otra forma con Promise 

async function imprimirCadaUnSegundo () {
    const ONE_SEC_IN_MS = 1000;
    for (let i = 1; i <= 10; i++) {
        await new Promise (resolve => setTimeout(resolve, ONE_SEC_IN_MS));
        console.log(i);
    }
 }

 imprimirCadaUnSegundo ()