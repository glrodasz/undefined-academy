## Ejercicio 1 📚
### Consigna:
1. Crea una clase Estudiante con campos privados para el nombre y apellido, un getter para el nombre completo y un método estático fromObject. -
2. Crea una función asíncrona calcularPromedios que acepte un array de estudiantes.
3. Dentro de calcularPromedios, calcula el promedio de las calificaciones al cuadrado de cada estudiante.
4. Imprime el nombre completo y el promedio de calificaciones de cada estudiante utilizando Template literals.

# Conceptos a tener en cuenta para la resolución de este ejercicio:

- **Class**: Las clases, introducidas en ECMAScript 2015, son una mejora sintatica sobre la *herencia* basada en *prototipos*. La sintaxis de las clases NO introduce un nuevo modelo de herencia orientada a objetos. Sino, las clases en este lenguaje, proveen una sintaxis mucho mas clara y simple de crear objetos y lidiar con la herencia. 
    Las clases son "funciones especiales", como las expresiones de funciones y declaraciones de funciones, la sintaxis de una clase tiene dos componentes (el primero de ellos es que el se utilizo para el ejercicio): 
    - **declaraciones de clases**: Para declarar una clase, se utiliza la palabra reservada ```class``` y el ```Name``` de la misma, que como convención se comienza con mayúsculas. A diferencia de las expresiones de clases, la declaración no permite que una clase existente sea declarada de nuevo y en caso de hacerse, lanzará un error.
     #### Cuerpo de la clase y definición de métodos:
    - **constructor**: Las declaraciones de clases utilizan el método ```constructor``` para crear e inicializar un objeto creado con una ```clase```. Solo puede haber un metodo especial con el nombre "constructor" en una clase. Este método, será quien recibe los argumentos que luego seran los valores que obtendrá el constructor cuando sea cree una nueva instancia de la clase.
        ### Sintaxis con ejemplo del ejercicio:
        ```
       class Student {
            #name;
            #lastname;
            constructor(name, lastname) {
                this.#name = name;
                this.#lastname = lastname;
                }
            get fullName () {
            return `${this.#name} ${this.#lastname}`;
            }
            static fromObject(obj) {
            return new Student(obj.name, obj.lastname);
            }  

        }
        ````
    - **expresiones de clases**: Estas pueden ser nombradas o no. Si se nombran el nombre de la clase es local sólo en el cuerpo de la clase.
        ### Sintaxis
        ````
        let MyClass = class [className] [extends] {
            //class body
        };
        ````
- **'#' Campos privados**: Las propiedades de las clases son públicas de forma predeterminada y se pueden ver y modificar fuera de la clase. Pero existe el prefijo hash ```#``` que los define como campos privados y son accesibles en el *constuctor de clases* desde dentro de la propia *declaración de clases*.  Entonces, de la única manera que se puede acceder a ellos, es como se muestra en el ejercicio, a través del *get* ```fullName```.

- **This**: En general, el valor de *this* está determinado por cómo se invoca a la función. No puede ser establecida mediante una asignación en tiempo de ejecución, y puede ser diferente cada vez que la función es invocada. Tiene distintos tipos de contextos: Global binding, Implicit binding, Explicit binding, New binding.

    - En el caso del ejercicio se utiliza como un *constructor* (con la palabra clave new), entonces su *this* es enlazado al nuevo objeto en construcción, dandole valores a los campos privados #name y #lastname.

- **Get**: Enlaza la propiedad de un objeto con una función que será llamada cuando la propiedad es buscada. Este se encargará de recibir un valor. Y servirá para acceder a los campos privados.
    ### Sintaxis
        ```
        { get prop(){...} }    
        ```

- **static**: Los métodos estaticos son llamados sin instanciar su clase y son habitualmente utilizados para crear funciones para una aplicación. Es decir, este se puede utilizar sin necesidad de instanciar una clase. En el caso del ejericio se utilizó para implementar el objeto *fromObject*:
    - **fromObject** =>  toma el objeto Student, extrae las propiedades name y lastname, y crea una nueva instancia de la clase Student con esos valores. 

- **map**: Este método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. En el ejercicio se esta utilizando para que itere por cada elemento del array que recibe la funcion asincronica en la que esta envuelta.

- **reduce**: el método *reduce()* ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
    La función reductora recibe cuatro argumentos:
        Acumulador (acum)
        Valor Actual (score)
        Índice Actual (idx)
        Array (src)
        Y el valor inicial (0)
    El valor devuelto de la función reductora se asigna al acumulador, cuyo valor se recuerda en cada iteración de la matriz y, en última instancia, se convierte en el valor final, único y resultante.

    ### Sintaxis
    ````
    arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])
    ````
- **toFixed**: Este método se aplica al promedio para redondear el resultado a dos decimales, asegurándose de que tenga un máximo de dos lugares después del punto decimal. 


---------------------------------------------------------------------------------------------------
## Ejercicio 2 📚
### Consigna:
1. Crea una función que imprima los números del 1 al 10, un número cada segundo.

# Conceptos a tener en cuenta para la resolución de este ejercicio:
- **Asincronismos** => La programación Asincrona es una técnica que permite a tu programa iniciar una tarea de larga duracion y seguir respondiendo a otros eventos mientras esa tarea se ejecuta, en lugar de tener que esperar hasta que esa tarea haya terminado. Una vez que dicha tarea ha finalizado, tu programa presenta el resultado.
Muchas de las funciones proporcionadas por los navegadores, especialmente las más interesantes, pueden tardar mucho tiempo en ejecutarse. Es precisamente por eso por lo que esas funciones son asíncronas. Por ejemplo:
    El llamado a una API:
    - Realizar peticiones HTTP utilizando fetch()
    - Acceder a la cámara o micrófono de un usuario mediante getUserMedia()
    - Pedir a un usuario que seleccione archivos usando showOpenFilePicker() 

Por lo tanto, aunque no tenga que implementar sus propias funciones asíncronas muy a menudo, necesitará utilizarlas correctamente.

- **Callbacks** 📱 => (Devolveme la llamada) Un CALLBACK es una funcion que se va a ejecutar en el futuro.
    - La función callback es el primer concepto del ASINCRONISMO, en el ejercicio además utilizamos la función *setTimeout()* que esta recibe una función *callback*

- Sintaxis de **setTimeout**
```
setTimeout(functionRef, delay)

```
El método global **setTimeout()** establece un temporizador que ejecuta una función o una pieza de código específica una vez que expira el temporizador.

----------------------------------------------------------------------------------------------------

## Ejercicio 3  📚
### Consigna:
1. Hacer una función que imprima los números del 1 al 10, un número cada segundo, pero usando un ciclo *for* con un *var*. 

# Conceptos a tener en cuenta para la resolución de este ejercicio:

Primer resolución que devuelve 11 ![img](https://user-images.githubusercontent.com/6051056/242687369-7e8a9bb8-1010-4de9-8112-c93b66049fdf.png)

#### Este resultado se debe a los siguientes conceptos: 

- *VAR* = Tiene un **Scope Global**.
- *LET* = Tiene un **Scope Local** que permite declarar variables limitando su **alcance (scope)** al **bloque, declaración, o expresión** donde se está usando. A diferencia de la palabra clave *var* la cual define una variable **global** o **local** en una *función* sin importar el ámbito del bloque. 
    - Otra diferencia entre *var* y *let* es que este último se **inicializa** a un valor sólo cuando un analizador lo evalúa.

### Explicación de como se ejecuta el código que devuelve 11:
````
const ONE_SEC_IN_MS = 1000;

function main() {
    for (var i = 1; i <= 10; i++) {
        function imprimir() {console.log(i)}
        setTimeout(imprimir, ONE_SEC_IN_MS * i)
    }
}

main();
````
Cuando se declara una variable con *var* adentro de un bucle, en realidad se está declarando esa variable para TODA la función.

Por lo tanto, al momento que la función **imprimir** es invocada dentro del **setTimeout**, el bucle ya ha terminado de ejecutarse y el valor de **i** ya es **11** (porque eso es lo que causa la finalización del bucle for), independientemente de cuándo se llame a *imprimir*.

- **Clousures 🌈** => permite acceder al ámbito (Scope) de una función exterior desde una función interior.
## Ejemplo de Clousure de la clase:
```
function createGreetingFunction(greeting) {

    function withName(name) {
        console.log(`${greeting}, ${name}`)
    }
    return withName; // En este caso el clousure sera capaz de recordar que 'greeting' se guarda en la funcion envolvente.

}
const sayHello = createGreetingFunction("Hello");
const decirHola = createGreetingFunction("Hola");
sayHello('Guillermo');
decirHola('Guillermo');


```
### Entonces, aplicando esto a la siguiente solución: 
```
const ONE_SEC_IN_MS = 1000;

function main() {
    
    for (var i = 1; i <= 10; i++) {
        function imprimir(i) {
         return function() { //closure va a recordar el valor, incluso si se ejecuto después.
            console.log(i); // La variable 'i' se guarda en la funcion envolvente.
         }    
        }
        setTimeout(imprimir(i), ONE_SEC_IN_MS * i)
    }
}

main();


```
El clousure en este caso recordara la referencia que guarda la variable *i* en ese momento del ciclo for. Es decir, que el *i* que recibe como parametro

----------------------------------------------------------------------------------------------------
## Ejercicio 4 📚
### Consigna:
1. Crear una funcionalidad que lea una lista de correos y filtre los correos validos y remueva la cadena de texto de *subaddresing*.
```
const emails = [
    "john.doe@example.com",
    "jane_doe+shopping@example.org",
    "alice.smith+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net",
    "emily*watsonnotes@examplenet"
];
```

# Conceptos a tener en cuenta para la resolución de este ejercicio:

- **Regex** => *expresión regular*: reune una secuencia de caracteristicas, las cuales definen un patrón de busqueda, principalmente para usar en operaciones de busqueda y coincidencia de texto. En otras palabras, sirve para validar que un texto cumple ciertas caracteristicas, por ejemplo, la validación de la construcción de un e-mail. 
    - *JavaScript* proporciona la clase **RegExp** para crear y manipular objetos de expresiones regulares, así como métodos en la clase String que pueden utilzarse en combinación con expresiones regulares, como: *match(), search(), replace(), y split()*
    - **replace**: Cambiar partes de una cadena de texto que coinciden con un patrón por otra cadena de texto. 
    - **test()**: Este método va a ejecutar la búsqueda de una ocurrencia entre una *expresión regular* y una *cadena mencionada*. Devolverá *true or false*.
**filter()**: creará un nuevo arreglo con todos los elementos que cumplen la condición implementada por la función dada.
**map()**: Este método crea una nueva matriz con los resultados de llamar a una función proporcionada en cada elemento de la matriz que llama.