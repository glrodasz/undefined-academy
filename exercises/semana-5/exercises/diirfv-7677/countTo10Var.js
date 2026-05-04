const ONE_SEC_IN_MS = 1000;

async function printNumbers(numbers){
    for (var i=1 ; i<= numbers ; i++){
        const storedValue = i;
        setTimeout(function() {            
            console.log(storedValue);
        }, ONE_SEC_IN_MS * i);
    }
}

printNumbers(10);