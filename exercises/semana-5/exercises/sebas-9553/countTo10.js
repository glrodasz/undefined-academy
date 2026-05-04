const ONE_SEC_IN_MS =1000

function print(i) {
    console.log(i);
}

function printCountTo10() {
    for (let index = 1; index <= 10; index++) {
        setTimeout(()=> {
            print(index);
        }, index * ONE_SEC_IN_MS)
    }
}

printCountTo10();