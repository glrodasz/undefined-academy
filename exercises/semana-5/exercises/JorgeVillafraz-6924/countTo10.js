function numberCount(to) {

    for (let i = 1; i <= to; i++) {
        setTimeout(function () { console.log(i) }, i * 1000)
    }

}

numberCount(10);