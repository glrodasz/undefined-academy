const ONE_SEC_IN_MS = 1000;

function counter (){
for (let i = 1; i <=10; i++) {
	function imprimir() { console.log(i) }
        setTimeout(imprimir, ONE_SEC_IN_MS * i)
    }
}


counter()

// Ejercicio 02 - Semana 05: Hacer una funcion que imprima los numeros del 1 al 10, un numero cada segundo