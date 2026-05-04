function countTo10() {
    let i=0;
    setInterval(oneSecond, 1000);
    function oneSecond() { 
        
        
        if (i === 10) {
            clearInterval(oneSecond);
        } else {
            i ++;
            console.log(i);
        }

    }
            
}
countTo10();

