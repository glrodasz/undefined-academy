function main(){

    for(let i = 1; i <= 10; i++){
    function imprimir(){
      console.log(i);
    }
    setTimeout(imprimir, 1000 * i);
    }
  }
  
  main();