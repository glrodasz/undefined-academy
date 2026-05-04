function printNum() {
    for (let i = 1; i <= 10; i++) {
        function num() {
            console.log(i)
        }
        let ONE_SEC_IN_MS_X_I = 1000 * i
        setTimeout(num, ONE_SEC_IN_MS_X_I)
    }
}

printNum()