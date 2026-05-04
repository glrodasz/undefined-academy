const ONE_SECOND_IN_MILLISECONDS = 1_000;


const printInOneSecond = (value) => {
    setTimeout(() => console.log(value), ONE_SECOND_IN_MILLISECONDS * value)
}


const main = () => {
    for (var i = 1; i <= 10; i = i + 1) {
        printInOneSecond(i)
    }
}

main()