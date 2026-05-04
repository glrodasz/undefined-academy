// t = h + p + l
// t = h + p + (p + 10)
// t = h + (2h) + ((2h) + 10)
// 85 = h + (2h) + ((2h) + 10)
// 85 = h + (2h) + (2h) + 10
// 85 - 10 = h + (2h) + (2h)
// 85 - 10 = h (1 + 2 + 2)
// 75 = h (5)
// 75/5 = h
// 15 = h

// Asignamos la cantidad de monedas de Hugo, este valor es el que tienes que resolver.
let hugo = 15;
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

