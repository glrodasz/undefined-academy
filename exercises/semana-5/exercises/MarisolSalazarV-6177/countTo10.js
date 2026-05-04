const ONE_SEC_IN_MS = 1000;

function main() {
    for (let n = 1; n <= 10; n++) {
        function imprimir() { console.log(n); }
        setTimeout(imprimir, ONE_SEC_IN_MS * n)
        }
    }


console.log(main());