
function numbers(){
    for (let number=1; number<=10; number++) {
        function print(){ console.log(number)}
        setTimeout(print, 1000 * number)
    }
}

numbers()