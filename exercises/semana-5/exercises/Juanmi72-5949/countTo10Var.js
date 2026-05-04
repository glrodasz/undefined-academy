const countTo10 = function() {
    for (var i = 1; i <= 10; i++) {
        const num = i
        setTimeout(()=> console.log(num),i* 1000);
        
    }
}

countTo10();