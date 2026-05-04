function main() {
   for (var i = 1; i <= 5; i++) {
      function imprimir(i) {
         return function () {
            return console.log(i);
         };
      };
      setTimeout(imprimir(i), 1000 * i);
   }
}

main();
