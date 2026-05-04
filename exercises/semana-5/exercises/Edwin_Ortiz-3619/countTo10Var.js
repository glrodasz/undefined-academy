const ONE_SEC_IN_MS = 1000;

function counter (){
for (var i = 1; i <=10; i++) {
	function imprimir(i){         
        return function () {
            return console.log(i) 
    }
}
        setTimeout(imprimir(i), ONE_SEC_IN_MS * i)
    }
}
counter()


// Ejercicio 03 - Semana 05: Realizar el mismo ejercicio anterior con ciclo for y declarar con VAR