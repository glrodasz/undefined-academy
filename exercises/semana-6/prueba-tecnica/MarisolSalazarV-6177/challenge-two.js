// Una transaction es duplicada, si tiene el mismo sourceAccount, targetAccount, category, amount y el tiempo es menor a 1 minuto de diferencia.

// Hacer una funcionalidad que agrupe las transaccciones duplicadas
// en una lista.

// Ejemplo:

const exampleOutput = [
    [
      {
        id: 1,
        sourceAccount: "A",
        targetAccount: "B",
        amount: 100,
        category: "eating_out",
        time: "2018-03-02T10:33:00.000Z",
      },
      {
        id: 2,
        sourceAccount: "A",
        targetAccount: "B",
        amount: 100,
        category: "eating_out",
        time: "2018-03-02T10:33:50.000Z",
      },
      {
        id: 3,
        sourceAccount: "A",
        targetAccount: "B",
        amount: 100,
        category: "eating_out",
        time: "2018-03-02T10:34:30.000Z",
      },
    ],
    [
      {
        id: 5,
        sourceAccount: "A",
        targetAccount: "C",
        amount: 250,
        category: "other",
        time: "2018-03-02T10:33:00.000Z",
      },
      {
        id: 6,
        sourceAccount: "A",
        targetAccount: "C",
        amount: 250,
        category: "other",
        time: "2018-03-02T10:33:05.000Z",
      },
    ],
  ];
  
  const transactions = [
    {
      id: 3,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2018-03-02T10:34:30.000Z",
    },
    {
      id: 1,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2018-03-02T10:33:00.000Z",
    },
    {
      id: 6,
      sourceAccount: "A",
      targetAccount: "C",
      amount: 250,
      category: "other",
      time: "2018-03-02T10:33:05.000Z",
    },
    {
      id: 4,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2018-03-02T10:36:00.000Z",
    },
    {
      id: 2,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2018-03-02T10:33:50.000Z",
    },
    {
      id: 5,
      sourceAccount: "A",
      targetAccount: "C",
      amount: 250,
      category: "other",
      time: "2018-03-02T10:33:00.000Z",
    },
  ];

  // 1. hay que filtrar por cada uno de los campos
  // 2. hay que agrupar esos campos en una lista
  // 3. el time de de cada uno debe ser menor a 1 minuto con un reduce time
  // 4. se debe hacer un mapeo de esa lista
  // 5. se debe hacer un sort para ordenar por tiempo.

  const filterBysourceAccount = ({ sourceAccount }) => (transaction) =>
  transaction?.sourceAccount === sourceAccount;

  const filterBytargetAccount = ({ targetAccount }) => (transaction) => 
  transaction?.targetAccount === targetAccount;

  const filterByAmount = ({ amount }) => (transaction) =>
  transaction?.amount === amount;

  const filterByCategory = ({ category }) => (transaction) => 
  transaction?.category === category;

  const TWENTY_THREE_HOURS_IN_MS = 24 * 60 * 60 * 1000;
  const FIFTY_NINE_MINUTES_IN_MS = 60 * 60 * 1000;
  const FIFTY_NINE_SECONDS_IN_MS = 60 * 1000;

  const filterByDate = ({ startDate, endDate }) => {
    const startTime = new Date(startDate).getTime();
    const endTime =
      new Date(endDate).getTime() -
      FIFTY_NINE_SECONDS_IN_MS;
  
    return (transaction) => {
      const transactionTime = new Date(transaction?.time).getTime();
  
      return transactionTime > startTime && transactionTime < endTime;
    };
  };

  const compareDate = (newDate, time) => {
    return newDate - time;
  }


  const getBalanceByCategoryAndRangeDate = (
    transactions,
    sourceAccount,
    targetAccount,
    amount,
    category,
    startDate,
    endDate
  ) =>
    Array.isArray(transactions)
      ? transactions
          .filter(filterBysourceAccount({ sourceAccount }))
          .filter(filterBytargetAccount({ targetAccount }))
          .filter(filterByAmount({ amount }))
          .filter(filterByCategory({ category }))
          .filter(filterByDate({ startDate, endDate }))
      : 0;

    ONE_MINUTE_IN_MS = 60 * 1000;

    console.log(getBalanceByCategoryAndRangeDate(transactions, "A", "B", 100, "eating_out", "2018-03-02T10:33:00.000Z", "2018-03-02T10:36:00.000Z" ))