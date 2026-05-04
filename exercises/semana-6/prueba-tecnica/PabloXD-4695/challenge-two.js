// Una transaction es duplicada, si tiene el mismo sourceAccount, targetAccount, category, amount
// y el tiempo es menor a 1 minuto de diferencia.

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

// In order to resolve the problem, we'll assume that all entry transactions have the complete require attributes
// and their are already validated
function processTransactions(listTransactions) {
  let resultTransactions = listTransactions.reduce((result, transaction) => {
    let index = result.findIndex((group) =>
      group.some((t) => isTransactionDuplicated(transaction, t))
    );
    if (index !== -1) {
      result[index].push(transaction);
    } else {
      result.push([transaction]);
    }
    return result;
  }, []);
  return resultTransactions;
}

//The following function was part of the first attempt to solve the problem, it was replaced by the previous function
function processTransactionsFirstAttempt(listTransactions) {
  let resultTransactions = [];
  listTransactions.forEach((transaction) => {
    let isDuplicated = false;
    let index = 0;
    while (resultTransactions[index] && !isDuplicated) {
      let i = 0;
      let duplicateList = resultTransactions[index];
      while (duplicateList[i] && !isDuplicated) {
        if (isTransactionDuplicated(transaction, duplicateList[i])) {
          isDuplicated = true;
        }
        i++;
      }
      index++;
    }
    if (isDuplicated) {
      resultTransactions[index - 1].push(transaction);
    } else {
      resultTransactions.push([transaction]);
    }
  });
  return resultTransactions;
}

function isTransactionDuplicated(newTransaction, oldTransaction) {
  return (
    getStringKeyAttributes(newTransaction) ===
      getStringKeyAttributes(oldTransaction) &&
    checkTransactionTime(newTransaction.time, oldTransaction.time)
  );
}

function checkTransactionTime(timeNewTransaction, timeOldTrasaction) {
  return (
    Math.abs(new Date(timeNewTransaction) - new Date(timeOldTrasaction)) <=
    60000
  );
}
function getStringKeyAttributes(transaction) {
  return JSON.stringify({ ...transaction, id: undefined, time: undefined });
}

const sortedListTransactions = transactions.sort(
  (a, b) => new Date(a.time) - new Date(b.time)
);

//Transaction with id number 4 has no duplicates, it will be placed in a separate list.
console.log(processTransactions(sortedListTransactions));
