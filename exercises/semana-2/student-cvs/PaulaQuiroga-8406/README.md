# semana-2

## Contenidos vistos:
### Introducción a la programación
**Ejercicio de calentamiento**
~~~
Respuesta:

let Hugo = 0;
let Paco = 2 * Hugo;
let Luis = Paco + 10;
let total = Hugo + Paco + Luis;
85 = Hugo + (2*Hugo) + (2*Hugo + 10);
85 = (5*Hugo) + 10;
85 - 10 = (5*Hugo);
75 = (5*Hugo)
75/5 = Hugo
15 = Hugo

Ahora: 
let Hugo = 15;

if (total === 85) {
console.log("Hugo: " + Hugo);
console.log("Paco: " + Paco);
console.log("Luis: " + Luis);
}
~~~
**Segundo ejercicio**
¿Como puedo implementar una expresión para verificar si un valor es un *Objeto*?
~~~
Respuesta:
typeof Obj === "object" && typeof != null;
~~~
---
### JavaScript 101
**Ejercicio de calentamiento**
- Escribir un *Objeto Humano* que te represente.
~~~
const human = {
    nombre: "Paula",
    edad: 28,
    blonde: false,
    altura: 1.68,
    música: true

};
~~~
**Ejercicio**
- ¿Cómo puedo implementar una expresión para verificar si un valor es un *ARRAY*?
~~~
Respuesta:
let arr = [];
typeof arr === "object" && arr.length != null;
~~~
**Investigación**
#### ¿Cómo hacer una copia de un objeto de manera pura?
- Se podría utilizar el *método* **Object.assign** copia sólo las propiedades enumerables y propias del objeto origen a un objeto destino. Pero no funciona cuando tiene subobjetos.


---
### HTML Semántico
El *HTML Semántico* es la práctica de utilizar etiquetas HTML que den significado y estructura a los contenidos de una página web.

---
### Formularios con HTML
**Ejercicio**
- ¿Como hacer qye el *input radio* sea requerido? 
*Respuesta: Solo alcanza con poner el atributo **required** a un solo input, pero es recomendable ponerle a todos.
- **Ejercicio 2**
 ¿Cómo prevenir el comportamiento por defecto del envío de información al servidor?
---
### JSON, DOM y CSSOM

---
