## Bubble Sort (Ordenamiento de burbuja)

El algoritmo de ordenación "Bubble Sort" es uno de los algoritmos de ordenación más simples. El concepto principal detrás de Bubble Sort es repetidamente "burbujear" o "flotar" el elemento más grande de la lista al final, hasta que toda la lista esté ordenada.

### Intrucciones

1. Comienza en el primer elemento de la lista con el siguiente.
2. Si el elemento actual es mayor que el siguiente, intercambia sus posiciones.
3. Avanza al siguiente elemento y repite el proceso hasta el final de la lista.
4. Al final del primer paso, el elemento más grande estará en la última posición de la lista.
5. Repite todo el proceso para la lista, excluyendo el último elemento.
6. Continúa repitiendo el proceso, excluyendo cada vez un elemento más (desde el final), hasta que no haya más elementos que comprobar.

### Psudocódigo

```
funcion ordenamientoBurbuja(lista)
	swapped = true
	mientras swapped
		swapped = false
		para i = 0 hasta longitud de lista - 1
			si lista[i] > lista[i + 1]
				lista[i], lista[i + 1] = lista[i + 1], lista[i]
				swapped = true
			fin si
		fin para
	fin mientras
```

https://www.toptal.com/developers/sorting-algorithms

## Binary Search (Busqueda Binaria)

La búsqueda binaria es un algoritmo eficiente para encontrar un elemento en una lista ordenada. Supone que la lista ya está ordenada y la divide repetidamente a la mitad hasta que encuentra el elemento o reduce el tamaño del segmento a cero.

### Instrucciones

1. Compara el elemento con el valor del elemento central de la lista.
2. Si el elemento es igual al valor del elemento central, se ha encontrado el elemento buscado y el proceso termina.
3. Si el valor del elemento central es mayor que el elemento, se toma la mitad inferior de la lista y se repite el proceso desde el paso 1.
4. Si el valor del elemento central es menor que el elemento, se toma la mitad superior de la lista y se repite el proceso desde el paso 1.
5. Si el elemento no se encuentra en la lista, se devuelve un mensaje de error.

### Psudocódigo

```
función busquedaBinaria(lista, elemento)
	primero = 0
	ultimo = longitud de lista - 1
	mientras primero <= ultimo
		medio = (primero + ultimo) / 2
		si lista[medio] == elemento
			retornar medio
		sino si lista[medio] < elemento
			primero = medio + 1
		sino
			ultimo = medio - 1
		fin si
	fin mientras
	retornar -1
fin función
```

https://www.youtube.com/watch?v=KXJSjte_OAI
