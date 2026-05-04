const countBySecond = () => {

    function wrapper(i){
        return function(){ 
            console.log(i)
        }
    }

    for (var i = 1; i <= 10; i++) {
        setTimeout( wrapper(i), 1000 * i)
    }
}

countBySecond()