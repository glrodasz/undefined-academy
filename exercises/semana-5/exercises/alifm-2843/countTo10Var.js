// --------------------- Assignment----------------------------

function printingWithVar() {
    for (var i = 1; i<=10; i++) {
        function printer(i) {
            return function() {
                console.log(i)
            }
        }

        setTimeout(printer(i), 1000 * i)
    }
}

printingWithVar();

// ------------ Outputs -------------

/*
1
2
3
4
5
6
7
8
9
10
*/