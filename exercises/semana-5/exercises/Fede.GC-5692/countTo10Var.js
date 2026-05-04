const ONE_SEC_IN_MS = 1 * 1000

function countTo10Var() {
    for (var i = 1; i <= 10; i++) {
        function print (i) {
            return function() {
                console.log(i)
            }
        }
        setTimeout(print(i), i * ONE_SEC_IN_MS);
        
    }
}

countTo10Var();