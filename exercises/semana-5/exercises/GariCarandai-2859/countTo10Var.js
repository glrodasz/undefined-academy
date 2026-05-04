
const ONE_SEC_IN_MS = 1000;

function countNumbers(maxNumber){
  
  for(var i = 1; i <= maxNumber; i++){
    function print(i){
      return function(){
        console.log(i);
      }
    }
    setTimeout(print(i), ONE_SEC_IN_MS * i);

  }
}

countNumbers(10);