
const ONE_SECOND_IN_MS = 1000



//usar var dentro del for es como si se declarara antes del for
//la variable se sobre escribe una y otra vez, al final le suma 1 => 11

function printNum() {

    for (var i = 1; i <= 10; i++) {

        (function () {
            var j = i;

            setTimeout(function print() { console.log(j) }, ONE_SECOND_IN_MS * j)
        }())

    }
}


printNum()
