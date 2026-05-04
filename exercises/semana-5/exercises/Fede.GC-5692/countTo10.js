const ONE_SEC_IN_MS = 1 * 1000

function countTo10() {
    for (let index = 1; index <= 10; index++) {
        setTimeout(() => {
            console.log(index)
        }, index * ONE_SEC_IN_MS);
        
    }
}

countTo10();