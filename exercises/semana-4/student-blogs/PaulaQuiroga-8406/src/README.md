# Explicación de como funciona el main.js

**import** lo que hace es traer el archivo humanize.js.
**function capitalize** capitaliza la primer letra de la fecha.

```
import humanize from "./utils/humanize.js";

function capitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);  
} 

function humanizeDate ($date) {
    const datetime = $date.getAttribute("dateTime"); //
    const humanizedDate = humanize(datetime); //
    $date.textContent = humanizedDate.capitalize;
} 
```
```
const $dates = document.querySelectorAll("time")
$dates.forEach(humanizeDate)
```
1. **function humanizeDate** Acá se seleccionan los dateTime del html. Y la única responsabilidad que tiene es humanizar el Nodo. 
2. *forEach* Acá se iteran.
3. Por c/ atributo dateTime se humaniza.
4. Se humaniza a través del humanize.js.
### Anotaciones
- El simbolo $ se acostumbra a usarlo por convención y además, para indicar que adentro de ellos, existen elementos del DOM (Arbol en donde aparece >NodeList) entonces lo que se requiere es que se manipule el dateTime, es decir, no el texto en sí.
## Nodo: >NodeList
Este no es un array. Es un **ARRAY-LIKE** osea que actua COMO un array pero no es. Es decir, no va a tener los metodos de los arrays
## ForEach y Funcion **Callback**  
El forEach recibe una funcion callback esto lo que hace es lo siguiente:
- Ante un array = ["NodoTime1", "NodoTime2", "NodoTime3", "NodoTime4"]
- Entonces lo que era el forEach es ir a la funcion que se le pase en este caso humanizeDate("date1") y le va a pasar la fecha1 como parametro
```
humanizaDate("NodoTime1")
humanizaDate("NodoTime2")
humanizaDate("NodoTime3")
humanizaDate("NodoTime4")
```