function printNum() {
    for (var i = 1; i <= 10; i++) {
        function num(i) {
            console.log(i)
        }
        var ONE_SEC_IN_MS_X_I = 1000 * i
        setTimeout(num, ONE_SEC_IN_MS_X_I, i)
    }
}

printNum()