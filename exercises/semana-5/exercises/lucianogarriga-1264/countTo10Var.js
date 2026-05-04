
const ONE_SEC_IN_MS = 1000;

function main(){
  for(var i = 1; i <= 10; i++){
    function imprimir(i){
     return function(){
       console.log(i)
     } 
    }
    setTimeout(imprimir(i), ONE_SEC_IN_MS * i)
  }
}

main()