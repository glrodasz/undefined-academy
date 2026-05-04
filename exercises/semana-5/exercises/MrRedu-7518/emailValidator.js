// Clase 4, semana 5
// Función que lea un array de correos y filtre los correos validos

let regExp = /^\w{3,16}(\.\w{2,12})?@([a-z]{2,12})((\.|\+)[a-z]{2,6})?$/

const emails =  [
                'john.doe@example.com',               // 👍🏻 Sí
                'jane_doe+shopping@example.org',      // 👎🏻 No
                'alice.smith+work@example.co.uk',     // 👎🏻 No
                'charlie.brown+newsletter@example.io',// 👎🏻 No
                'emily.watson+notes@example.net',     // 👎🏻 No
                'abc5464.@kari.aks',                  // 👎🏻 No
                'abc5464.sss@kari.aks',               // 👍🏻 Sí
                'pepito_jose.1832@abc+ab',            // 👍🏻 Sí
                'aok_jose.1832@AAAA+cv',              // 👎🏻 No
                'normalName_2035@mycity.city',        // 👍🏻 Sí
                'anormalName-666@DREAM.23',           // 👎🏻 No
                'kira_08@abc.io',                     // 👍🏻 Sí
                ]

const emailValidator = () => {
    emails.map((email)=>{
        if(regExp.test(email)){
            console.log(`${email} 👍🏻`)
        } else {
            console.log(`${email} 👎🏻`)
        }
    })
}
emailValidator()

/*

# RegExp explicado
/^\w{3,12}(\.\w{2,12})?@([a-z]{2,12})((\.|\+)[a-z]{2,6})?$/


## Partes divididas:

- - -   /^\w{3,16}   - - -
- Expresión necesaria
- Comenzar con caracteres alfanuméricos, con un rango mínimo de 3, hasta 16
// aBc_12

- - -   (.\w{2,12})?   - - -
- Expresión que podría existir o no `?`
- Debe comenzar con `.`
- Continúa con caracteres alfanúmeros, de longitud mínima de 2 a 12
// aBc_12.j5

- - -   @   - - -
- El símbolo del arroba es necesario
// aBc_12.j5@

- - -   ([a-z]{2,12})   - - -
- Expresión necesaria
- Letras en minúscula, con longitud mínima de 2 a 12
// aBc_12.j5@kl

- - -   ((.|+)[a-z]{2,6})?$/   - - -
- Expresión que podría existir o no `?`
- Debe comenzar con un `.` o con un `+`
- Le siguen letras minúsculas, con longitud mínma de 2 a 6
// aBc_12.j5@kl
// aBc_12.j5@kl.xk
// aBc_12.j5@kl+xk

*/