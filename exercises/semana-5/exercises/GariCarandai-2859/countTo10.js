
function countTo10(numero){
  let count = 1;

  const intervalo = setInterval(function(){
    if(count > numero){ return clearInterval(intervalo); }
    console.log(count);
    count++;
    
  }, 1000);
}

countTo10(10);