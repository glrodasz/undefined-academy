const ONE_SEC_IN_MS = 1000

function printNumbers (num, callback){
    for(let i = 1; i < (num+1); i++ )
    setTimeout(function(){
        callback(i)
    }, i * ONE_SEC_IN_MS)
}

printNumbers(10,console.log)