// ¿Cómo puedo implementar una expresión para verificar si un valor es un array?

let arr1 = []
typeof arr1 //'object' ⛔
typeof arr1 === 'object' && arr1?.length !== null //true ⚠

let arr2 = {length: 0}
typeof arr1 === 'object' && arr1?.length !== null //true ⛔

let arr3 = []
Array.isArray(arr3) //true ✅

let arr4 = {}
Array.isArray(arr4) //false ✅
