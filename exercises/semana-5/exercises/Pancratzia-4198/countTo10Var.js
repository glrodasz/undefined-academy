/*Luego de ver la resolución del ejercicio, decidí adaptar mi código al código del mentor para observar el error comentado e implementar una forma de resolverlo*/

const ONE_SECOND_IN_MILLISECONDS = 1000;

async function contarHastaNDeSegundoEnSegundo(n) {
  for (var i = 1; i <= n; i++) {
    // Función anónima para imprimir el valor de i
    (function (i) {
      setTimeout(function () {
        console.log(i);
      }, ONE_SECOND_IN_MILLISECONDS * i);
    })(i);//Aqui se llama a a la función anonima y se pasa i como argumento
  }
}

contarHastaNDeSegundoEnSegundo(10);



/*
------ESTE CÓDIGO FUE REALIZADO POR MI SIN EMBARGO, USAR VAR EN LUGAR DE LET NUNCA ME DIO PROBLEMA PUESTO QUE DENTRO DEL PROMISE SE ESTABA CREANDO UNA FUNCION ANONIMA POR LO TANTO NO HABÍA PROBLEMA CON EL AMBITO DE VAR-----------

const ONE_SECOND_IN_MILLISECONDS = 1000;

async function contarHastaNDeSegundoEnSegundo(n, callback) {
  

  for (var i = 1; i <= n; i++) {

    await new Promise(function (resolve) {
      callback(i);
      setTimeout(resolve, ONE_SECOND_IN_MILLISECONDS);
    });

  }

}

contarHastaNDeSegundoEnSegundo(10, console.log);
*/
