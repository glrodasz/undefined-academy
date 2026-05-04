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
  // getBalance(transactions, 'eating_out', '2019-01-01', '2019-12-31') => -130
  
  const filterByCategory =
    ({ category }) =>
    (transaction) =>
      transaction?.category === category;
  
  const TWENTY_THREE_HOURS_IN_MS = 23 * 60 * 60 * 1000;
  const FIFTY_NINE_MINUTES_IN_MS = 59 * 60 * 1000;
  const FIFTY_NINE_SECONDS_IN_MS = 59 * 1000;
  
  const filterByDate = ({ startDate, endDate }) => {
    const startTime = new Date(startDate).getTime();
    const endTime =
      new Date(endDate).getTime() +
      TWENTY_THREE_HOURS_IN_MS +
      FIFTY_NINE_MINUTES_IN_MS +
      FIFTY_NINE_SECONDS_IN_MS;
  
    return (transaction) => {
      const transactionTime = new Date(transaction?.time).getTime();
  
      return transactionTime >= startTime && transactionTime <= endTime;
    };
  };
  
  const sumAmount = (totalBalance, transaction) =>
    totalBalance + transaction?.amount ?? 0;
  
  const getBalanceByCategoryAndRangeDate = (
    transactions,
    category,
    startDate,
    endDate
  ) =>
    Array.isArray(transactions)
      ? transactions
          .filter(filterByCategory({ category }))
          .filter(filterByDate({ startDate, endDate }))
          .reduce(sumAmount, 0)
      : 0;
  
  console.log(
    getBalanceByCategoryAndRangeDate(transactions, "salary", "2019-01-01", "2023-12-31")
  );