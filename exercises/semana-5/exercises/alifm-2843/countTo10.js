// ------------------- Assignment ------------------------

// First Solution

function printNr10s() {
    setTimeout(function () {
        console.log('1️⃣')
    }, 1000)
    setTimeout(function () {
        console.log('2️⃣')
    }, 2000)
    setTimeout(function () {
        console.log('3️⃣')
    }, 3000)
    setTimeout(function () {
        console.log('4️⃣')
    }, 4000)
    setTimeout(function () {
        console.log('5️⃣')
    }, 5000)
    setTimeout(function () {
        console.log('6️⃣')
    }, 6000)
    setTimeout(function () {
        console.log('7️⃣')
    }, 7000)
    setTimeout(function () {
        console.log('8️⃣8')
    }, 8000)
    setTimeout(function () {
        console.log('9️⃣')
    }, 9000)
    setTimeout(function () {
        console.log('🔟')
    }, 10000)
}
printNr10s()


// 2nd solution 

function printing10Numbers() {
    const TIMES = 1000
    setTimeout(function () {
        console.log('--- 1');
        setTimeout(function () {
            console.log('--- 2');
            setTimeout(function () {
                console.log('--- 3');
                setTimeout(function () {
                    console.log('--- 4');
                    setTimeout(function () {
                        console.log('--- 5');
                        setTimeout(function () {
                            console.log('--- 6');
                            setTimeout(function () {
                                console.log('--- 7');
                                setTimeout(function () {
                                    console.log('--- 8');
                                    setTimeout(function () {
                                        console.log('--- 9');
                                        setTimeout(function () {
                                            console.log('--- 10');
                                        }, TIMES)
                                    }, TIMES)
                                }, TIMES)
                            }, TIMES)
                        }, TIMES)
                    }, TIMES)
                }, TIMES)
            }, TIMES)
        }, TIMES)
    }, TIMES)
}
printing10Numbers()


// ------------------- 3rd solution. Base on profe's solution -------------------------------

function foringCounting() {
    const TIMES = 1000

    for (let i = 1; i <= 10; i++) {
        setTimeout(function () {
            console.log('- Number:', i)
        }, TIMES * i)
    }
}

foringCounting()


// Professor's solution
const ONE_SEC_IN_MS = 1000

function main() {
    for (let i = 1; i <= 10; i++) {
        function printing() { console.log(i) }
        setTimeout(printing, ONE_SEC_IN_MS * i)
    }
}

main()

// -------------------- Outputs --------------------

/*
1️⃣
--- 1
- Number: 1
1
2️⃣
- Number: 2
2
--- 2
3️⃣
- Number: 3
3
--- 3
4️⃣
- Number: 4
4
--- 4
5️⃣
- Number: 5
5
--- 5
6️⃣
- Number: 6
6
--- 6
7️⃣
- Number: 7
7
--- 7
8️⃣8
- Number: 8
8
--- 8
9️⃣
- Number: 9
9
--- 9
🔟
- Number: 10
10
--- 10
*/
