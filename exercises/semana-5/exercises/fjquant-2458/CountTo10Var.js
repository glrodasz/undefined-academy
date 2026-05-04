
function numbers(){
    for (var number=1; number<=10; number++) {
        function print(number){ 
            return function(){
            console.log(number)
        }
    }
        setTimeout(print(number), 1000 * number)
    }
}

numbers()