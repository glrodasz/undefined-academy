const oneSeg = 1000;

function count(){
    for (let i = 1; i <= 10; i++) {
      function imprimir(){console.log(i);}
      setTimeout(imprimir, oneSeg * i);
  }
  }
  
  count();