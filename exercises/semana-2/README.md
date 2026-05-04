# ⛺ Semana 2

> 🏕️ [Base de conocimientos.](https://undefinedshell.notion.site/Semana-2-c178367ef97549049ffb313d7b098b59)

Ejercicios de la segunda semana.

## 🏋Clase 1 [EJERCICIOS]

### 🔥 Calentamiento

Hugo, Paco y Luis tienen una cantidad desconocida de monedas cada uno.

Sabemos que Paco tiene el doble de monedas que Hugo y que Luis tiene 10 monedas más que Paco.

Si los tres juntos tienen un total de 85 monedas.

**¿Cuántas monedas tiene cada uno?**

```javascript
// Asignamos la cantidad de monedas de Hugo, este valor es el que tienes que resolver. 
let hugo = 0;
// Calculamos la cantidad de monedas de Paco y Luis en función de Hugo.
let paco = 2 * hugo;
let luis = paco + 10;

// Sumamos las cantidades de monedas de los tres amigos 
let total = hugo + paco + luis;

if (total === 85) {
    console.log("Hugo: " + hugo)
    console.log("Paco: " + paco)
    console.log("Luis: " + luis)
}
```

### 💻 Ejercicio

¿Cómo puedo implementar una expresión para verificar si un valor es un objeto?

Ejemplo: `typeof obj === "object"`

## 🏋Clase 2 [EJERCICIOS]

### 🔥 Calentamiento

Escribir un objeto "humano" que te represente.

Ejemplo:

```javascript
const human = {
    name: "Guillermo",
    blonde: true
};
```

### 💻 Ejercicio

¿Cómo puedo implementar una expresión para verificar si un valor es un array?

Ejemplo: `typeof arr === "object"`

## 🏋Clase 3 [EJERCICIOS]

### 🔥 Calentamiento

1. Tomar el HTML de tu hoja de vida (`index.html`) y verificar el outline en [https://validator.w3.org/nu/](https://validator.w3.org/nu/)
2. Marcar la opción de `outline`
3. Click en `Check`
4. Verifica que el outline de los encabezados tenga sentido.
5. Corregir en caso de que tenga errores o no haga sentido.

### 💻 Ejercicio

1. Cambiar las etiquetas de tu hoja de vida para hacer uso de etiquetas semánticas.
2. Hacer fork del repositorio de la semana 2: `git@github.com:undefined-academy/semana-2.git`
3. Hacer un pull request con dichos cambios desde tu repositorio forked.
4. La estructura debería ser la siguiente:

```markdown
├── student-cvs/
│   ├── glrodasz-0666/
│   │   ├── index.html
│   │   ├── styles.css
```

## 🏋Clase 4 [EJERCICIOS]

### 🔥 Calentamiento

1. Ir a [https://codepen.io/pen/](https://codepen.io/pen/)
2. En la zona de HTML, escribir el siguiente control: `<input type="datetime-local"name="meeting">`
3. Hacer esto con todos los navegadores que tenga instalados y explorar el control: Chrome, Edge, Firefox,Safari, etc

### 💻 Ejercicio

- En el mismo Pull Request de la semana-2, agregar para tu hoja de vida una sección o página nueva de contacto que haga uso de los formularios de HTML.

- 🍎  Debemos prevenir el comportamiento por defecto del envío de la información al servidor.
