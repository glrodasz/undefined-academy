//Crear una funcionalidad dada una lista de transacciones y su categoría
//Devolver la suma de transaciones para esa categoría

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

const totalAmount = (accumulator,transaction) => accumulator+transaction.amount;

function BalanceByCategory(categoryInput){
    return transactions.filter(transaction => transaction.category == categoryInput).reduce(totalAmount,0)
}

console.log(BalanceByCategory("groceries"))
console.log(BalanceByCategory("salary"))
console.log(BalanceByCategory("eating_out"))