// 1.
function imprimirNumeros() {
    let numero = 1;
    const intervalId = setInterval(() => {
      console.log(numero);
      numero++;
      if (numero > 10) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  
  imprimirNumeros();

  //2.

  const ONE_SEC_IN_MS = 1000;

  function main() {
    for (let i = 1; i <= 10; i++) {
      function imprimir() { console.log(i) }
      setTimeout(imprimir, ONE_SEC_IN_MS*i);
    }
  }

  main()
  