// const ONE_SEC_IN_MS = 1000

// function printNumbers(num, callback) {
//     for (var i = 1; i < (num + 1); i++)
//         setTimeout(function () {
//             callback(i)
//         }, i * ONE_SEC_IN_MS)
// }

// printNumbers(10, console.log)

// 11 - 11 - 11 ... porque con var modifica la variable de forma global
// seTimeout(i = 1, i = 1 * 1000)
// Al reccorrer la segunda vez
// seTimeout(i = 2, i = 2 * 1000)
// seTimeout(i = 3, i = 3 * 1000) porque la i es global, no queda guardad en cada bloque
// Si fuera  let, guardaría una i por cada bloque, es decir, guardaría "10 variables"


const ONE_SEC_IN_MS = 1000

function main() {
    for (var i = 1; i <= 10; i++) {
        function imprimir(i) {
            //Al hacer el clouser, se recuerda el i incluso cuando finaliza
            return function () {
                console.log(i);
            }
        }
        setTimeout(imprimir(i), i * ONE_SEC_IN_MS)
    }

}




