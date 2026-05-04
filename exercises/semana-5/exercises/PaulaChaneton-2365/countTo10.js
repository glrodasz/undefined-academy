const ONE_SECOND_IN_MS = 1000


//Imprimiendo números con forEach

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.forEach(number => {
    function print() { console.log(number) }
    setTimeout(print, ONE_SECOND_IN_MS * (number))
})



//Imprimiendo números con for Of

function printNum1() {

    for (let number of numbers) {
        function print() {console.log(number)}
        setTimeout(print, ONE_SECOND_IN_MS*(number))
    }
}

//printNum1()



//Imprimiendo números con for Let

function printNum2() {

    for (let i = 1; i <= 10; i++) {

        function print() {console.log(i)}

        setTimeout(print, ONE_SECOND_IN_MS*i)

    }
}

//printNum2()




/*
// Imprimiendo números versión 1

function printNum(numero, callback, time) {

    setTimeout(function () { callback(numero); }, time * ONE_SECOND_IN_MS)
}

printNum(1, console.log, 1)
printNum(2, console.log, 2)
printNum(3, console.log, 3)



// Imprimiendo números versión 2

function calculando(n, callback, time) {
    setTimeout(function () {
        callback(n)
    }, time * ONE_SECOND_IN_MS)
}


calculando("1", function (n) {
    console.log("1")

    calculando("2", function (n) {
        console.log("2")

        calculando("3", console.log, 1)
    }, 1)
}

    , 5)



// Imprimiendo números versión 3



function slowSquare (number){
    return new Promise (function (resolve){
        
        const result = number;

        setTimeout (function (){
            resolve(result);
        }, 1000)
    })
}

function calculate(result){
    return slowSquare(result,console.log)
}

slowSquare(1)
.then (console.log)

slowSquare(2)
.then(calculate)
.then (console.log)

slowSquare(3)
.then(calculate)
.then(calculate)
.then (console.log)



// Imprimiendo números versión 4


function calculate (number){
    return new Promise (function (resolve){
        
        const result = number+1;
        setTimeout (function (){
            resolve(result);
        }, 1000)
    })
}
async function main() {

    console.log(1);
    
    const R1=await calculate (1)
    
    console.log(R1)
    
    const R2=await calculate (R1)
    
    console.log(R2)
    
    const R3=await calculate (R2)    
    
    console.log(R3)
    
    }
    
    
    main();
*/
