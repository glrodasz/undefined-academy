function numberCount(to) {

    for (var i=1; i <= to; i++){

        let num = i;
        setTimeout(function() {console.log(num)}, i*1000)
    }
 
}


numberCount(10);



// Version vista en clases

// let ONE_SEC_IN_MS = 1000;
// function main() {
//     for (var i = 1; i <= 10; i++) {
  
//       function print(i){
//         return function() {
//           console.log(i)
//         }
//       }
  
//       setTimeout(print(i), ONE_SEC_IN_MS * i)
//     }
//   }
  
