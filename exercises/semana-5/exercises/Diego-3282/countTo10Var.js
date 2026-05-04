const ONE_SECONDS = 1000;

function countTo10() {
  for (var i = 1; i <= 10; i++) {
    function imprimir(number) {
        return function cuenta(){
            console.log(number);
        }      
    }
    var count = imprimir(i);
    setTimeout(count, ONE_SECONDS * i);
  }
}

countTo10();
