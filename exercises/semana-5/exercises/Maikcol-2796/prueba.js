// Una transaction es duplicada, si tiene el mismo sourceAccount, targetAccount, category, amount y el tiempo es menor a 1 minuto de diferencia.

// Hacer una funcionalidad que agrupe las transaccciones duplicadas
// en una lista.

// Ejemplo:
const TRANSACTION_POSITION = {
  actual: "actual",
  next: "next",
};
function findDuplicatedTransactions(transactions) {
  let idDuplicatedTransactions = [];
  const arrayDuplicatedTransactions = [];
  transactions.forEach((transaction, ind, array) => {
    const time = new Date(transaction.time);
    const maxTimeDiference = time.getTime() + 60_000;
    const minTimeDiference = time.getTime() - 60_000;

    let duplicatedTransactions = [];
    let isInArray = { status: false, position: "" };
    let indexToFill;

    for (let i = 0; i < array.length; i++) {
      if (
        i !== ind &&
        transaction.sourceAccount === array[i].sourceAccount &&
        transaction.targetAccount === array[i].targetAccount &&
        transaction.category === array[i].category &&
        transaction.amount === array[i].amount &&
        new Date(array[i].time) >= minTimeDiference &&
        new Date(array[i].time) <= maxTimeDiference
      ) {
        //revisión de si las transacciones ya están en la lista de duplicados
        arrayDuplicatedTransactions.forEach((transactions, index) => {
          if (transactions !== undefined && transactions.length > 0) {
            for (const element of transactions.entries()) {
              if (element[1].id === array[i].id) {
                isInArray.status = true;
                isInArray.position = TRANSACTION_POSITION.next;
                indexToFill = index;
                break;
              }
              if (element[1].id === transaction.id) {
                isInArray.status = true;
                isInArray.position = TRANSACTION_POSITION.actual;
                indexToFill = index;
                break;
              }
            }
          }
          // else {
          //   isInArray.status = false;
          //   isInArray.position = "";
          // }
        });
        //si la transacción actual ya está en la lista de duplicadas revisa que la siguiente no esté y la agrega
        if (
          isInArray.status &&
          isInArray.position === TRANSACTION_POSITION.actual &&
          !idDuplicatedTransactions.includes(array[i].id)
        ) {
          arrayDuplicatedTransactions[indexToFill].push(array[i]);
          idDuplicatedTransactions.push(array[i].id);
        }
        //si la transacción siguiente ya está en la lista de duplicadas revisa que la actual no esté y la agrega
        if (
          isInArray.status &&
          isInArray.position === TRANSACTION_POSITION.next &&
          !idDuplicatedTransactions.includes(transaction.id)
        ) {
          arrayDuplicatedTransactions[indexToFill].push(transaction);
          idDuplicatedTransactions.push(transaction.id);
        } else {
          //agrega las transacciones duplicadas
          if (
            !duplicatedTransactions.includes(transaction) &&
            !idDuplicatedTransactions.includes(transaction.id)
          ) {
            duplicatedTransactions.push(transaction);
            idDuplicatedTransactions.push(transaction.id);
          }
          if (
            !duplicatedTransactions.includes(array[i]) &&
            !idDuplicatedTransactions.includes(array[i].id)
          ) {
            duplicatedTransactions.push(array[i]);
            idDuplicatedTransactions.push(array[i].id);
          }
        }
      }
    }
    if (duplicatedTransactions.length !== 0)
      arrayDuplicatedTransactions.push(duplicatedTransactions);
  });
  return arrayDuplicatedTransactions;
}
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

console.log(
  "Duplicated transactions: ",
  findDuplicatedTransactions(transactions)
);
