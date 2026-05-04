const ONE_SECOND = 1000;

function count(acc) {
    setTimeout(() => {
        console.log(acc)
    } , ONE_SECOND * acc);
}

async function printNumbers() {

    for(i = 1; i <= 10 ; i++) {
        await count(i);    
    }
}


printNumbers()