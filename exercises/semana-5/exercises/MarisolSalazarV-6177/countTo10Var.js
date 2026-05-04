ONE_TIME = 1000;

function contarN() {
    for (var n = 1; n <= 10; n = n + 1) {
        function print(n) { 
            return function() {
                console.log(n);
            }
        }
        setTimeout(print(n), ONE_TIME * n);
    }
}

console.log(contarN());