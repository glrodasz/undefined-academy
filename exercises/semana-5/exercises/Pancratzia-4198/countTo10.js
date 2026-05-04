const ONE_SECOND_IN_MILLISECONDS = 1000;

async function contarHastaNDeSegundoEnSegundo(n, callback) {
  

  for (let i = 1; i <= n; i++) {

    await new Promise(function (resolve) {
      callback(i);
      setTimeout(resolve, ONE_SECOND_IN_MILLISECONDS);
    });

  }

}

contarHastaNDeSegundoEnSegundo(10, console.log);
