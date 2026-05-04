const ONE_MILLISECONDS = 1000

for (var i = 1; i < 11; i++) {
    (function(i){
        setTimeout(() => {
            console.log(i)
          }, i * ONE_MILLISECONDS)
    })(i)
}
