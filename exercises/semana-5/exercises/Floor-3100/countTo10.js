function writeNumber(number) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            if (number <= 10) {
                console.log(number);
                resolve(writeNumber(number + 1));
            } 
        }, 1000);
    });
}

writeNumber(1).then(console.log);
