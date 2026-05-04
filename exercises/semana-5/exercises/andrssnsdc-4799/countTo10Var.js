const segundo_en_milisegundo = 1000;
function contador() { 
 
  for (var i = 1; i <= 10; i++) {
    (function(j) {
      setTimeout(function() {
        console.log(j);
      }, j * segundo_en_milisegundo);
    })(i);
  }
}

contador();