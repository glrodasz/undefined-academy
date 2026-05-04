const ONE_SEC_IN_MS = 1000;

async function printNumbers(numbers){
    for (let i=1 ; i<= numbers ; i++){
        setTimeout(function() {
            console.log(i);
        }, ONE_SEC_IN_MS * i);
    }
}

printNumbers(10);

