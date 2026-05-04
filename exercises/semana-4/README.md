# ⛺ Semana 4

> 🏕️ [Base de conocimientos.](https://undefinedshell.notion.site/Semana-4-30b7ce779d2d4ab1b9de5982fe199561)

Ejercicios de la cuarta semana.

## 🏋Clase 1 [EJERCICIO]

1. Crear un nuevo proyecto `npm init -y` e instala lodash como dependencia: `npm install lodash`.
2. Recuerda agregar `"type": "module"` al `package.json`
3. Crea un archivo `index.js` y copia las entradas del repositorio [https://github.com/glrodasz/undefined-academy/blob/main/biblioteca-utilidades/index.js#L3-L60](https://github.com/glrodasz/undefined-academy/blob/main/biblioteca-utilidades/index.js#L3-L60)
4. Utiliza los métodos de **Lodash** para Filtrar las entradas que tenga el tag de `Desarrollo` , Mapea por titulo y Agrupa por autor.

## 🏋Clase 2 [EJERCICIO]

Crear una función que dada una fecha nos permita "humanizarla" con las siguientes reglas:

1. Si la fecha es menos de un mes, mostrarla de manera humana, por ejemplo `Hace 2 minutos` , `Hace 4 días` , `Hace 2semanas`.
2. Si la fecha es más de un mes, mostrar mes y día, por ejemplo `Febrero 24` , `Enero 2`.
3. Si la fecha no es el mismo año, mostrar la fecha completa: `Noviembre 20, 2022`.

## 🏋Clase 3 [EJERCICIO]

1. Actualizar el código de la CV y Blog para hacer uso de las variables y módulos con SASS.
2. Crear un set de tres archivos dónde `main.scss` cargara `base.scss` y `desktop.scss` mediante `@use`.
3. `base.scss` tendrá los estilos mobile first y `desktop.scss` tendrá la variación para escritorio.
4. Los colores deben ser movidos a variables SASS, ubicados en `variables.scss`.

    **Tip:**  usar nombres de colores con [https://chir.ag/projects/name-that-color/](https://chir.ag/projects/name-that-color/) por ejemplo: `#6195ED` sería `$cornFlowerBlue`

    ```scss
        // variables.scss
        $cornFlowerBlue: #6195ED;
    ```

## 🏋Clase 4 [EJERCICIO]

1. Hacer fork del repositorio de la semana-4 `https://github.com/undefined-academy/semana-4`
2. Usar la función humanize realizada en el ejercicio de la clase 2 para mostrar las fechas de forma humana en el HTML.
3. Subir los cambios realizados en el ejercicio de la semana 3 y crear el `pull request`.

### Estructura del PR

```MarkdownC
.
├── student-cvs/
│ └── glrodasz-0666/
│     ├── index.html
│     ├── form.html
│     ├── main.scss
│     ├── styles/
│     │   ├── variables.scss
│     │   ├── base.scss
│     │   └── desktop.scss
│     └── main.mjs // Agregar función para humanizar fechas
├── student-blogs/
│ └── glrodasz-0666/
│     ├── index.html
│     ├── main.scss
│     ├── styles/
│     │   ├── variables.scss
│     │   ├── base.scss
│     │   └── desktop.scss
│     └── main.mjs // Agregar función para humanizar fechas
```