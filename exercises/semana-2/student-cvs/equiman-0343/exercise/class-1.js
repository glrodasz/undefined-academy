// ¿Cómo puedo implementar una expresión para verificar si un valor es un objeto?

let obj1 = {}
typeof obj1 === 'object' //true ✅

let obj2 = null
typeof obj2 === 'object' //true ⛔
typeof obj2 !== null && obj2 === 'object' //false ✅

let obj3 = {}
typeof obj3 !== null && obj3 === 'object' //true ✅

