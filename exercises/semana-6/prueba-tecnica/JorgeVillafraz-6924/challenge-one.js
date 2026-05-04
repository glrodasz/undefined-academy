// Crear una funcionalidad que dado un lista de transacciones, una categoria,
// un rango de fechas, devuelva la suma de todas las transacciones de esa categoria.

// 1. Entiendan muy bien el enunciado
// 2. Planear metalmente / rayar un pseudocódigo de como lo solucionarían
// 3. Hagan funcionalidades pequeñas
// 4. Hagan pase las pruebas (unit tests / console.logs)
// 5. Refactoricen (pongan el código más lindo / legible)

const transactions = [
  {
    id: 123,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -30,
    category: "eating_out",
    time: "2018-03-12T12:34:00Z",
  },
  {
    id: 124,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -50,
    category: "eating_out",
    time: "2018-03-12T11:34:00Z",
  },
  {
    id: 127,
    sourceAccount: "my_account",
    targetAccount: "restaurant",
    amount: -100,
    category: "eating_out",
    time: "2019-03-23T11:51:00Z",
  },
  {
    id: 125,
    sourceAccount: "my_work",
    targetAccount: "my_account",
    amount: 1000,
    category: "salary",
    time: "2019-02-12T12:34:00Z",
  },
  {
    id: 126,
    sourceAccount: "my_work",
    targetAccount: "my_account",
    amount: 1100,
    category: "salary",
    time: "2019-05-12T12:34:00Z",
  },
  {
    id: 129,
    sourceAccount: "my_account",
    targetAccount: "my_work",
    amount: -100,
    category: "salary",
    time: "2019-05-12T12:35:00Z",
  },
  {
    id: 128,
    sourceAccount: "my_account",
    targetAccount: "supermarket",
    amount: -10,
    category: "groceries",
    time: "2019-01-23T12:51:00Z",
  },
];

// Datos de ejemplo de la prueba



const filterCategory = (categorytest) => {
  return (element) => {
    return element.category === categorytest;
  }
}

const filterDate = (starDate, endDate) => {

  const ONE_DAY_IN_MS = (23 * 3600 * 1000) + (59 * 60 * 1000) + (59 * 1000);
  const startRangeDateInMs = new Date(starDate).getTime();
  const endRangeDateInMs = new Date(endDate).getTime() + ONE_DAY_IN_MS;

  return (element) => {
    const transactionDateInMs = new Date(element.time).getTime();

    return transactionDateInMs >= startRangeDateInMs && transactionDateInMs <= endRangeDateInMs;
  }
}

const amountsSum = (totalSum, elementAmount) => {
  totalSum += elementAmount.amount
  return totalSum
}

function sumAmountByCategoryAndDateRange(transactions, category, starDate, endDate) {
  return transactions
    .filter(filterCategory(category))
    .filter(filterDate(starDate, endDate))
    .reduce(amountsSum, 0);
}

console.log(sumAmountByCategoryAndDateRange(transactions, "eating_out", "2017-01-01", "2023-02-12"));



 