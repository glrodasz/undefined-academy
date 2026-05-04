//Crear una función que encuentre las transacciones duplicadas
//Se considera que una transacción está duplicada si tiene la  misma
//sourceAccount, la misma targetAccount, la misma amount, la misma category
//y el tiempo transcurrido entre las dos transaciones es inferior a 1 minuto

//Hacer una funcionalidad que agrupe las transacciones duplicadas en una lista

//Datos para probar la función
const transactions = [
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
    {
      id: 4,
      sourceAccount: "A",
      targetAccount: "C",
      amount: 250,
      category: "other",
      time: "2018-03-02T10:33:00.000Z",
    },
    {
      id: 5,
      sourceAccount: "A",
      targetAccount: "C",
      amount: 250,
      category: "other",
      time: "2018-03-02T10:33:05.000Z",
    },
    {
      id: 6,
      sourceAccount: "A",
      targetAccount: "D",
      amount: 250,
      category: "other",
      time: "2018-03-02T10:32:20.000Z"
    },
    {
      id: 7,
      sourceAccount: "A",
      targetAccount: "D",
      amount: 250,
      category: "other",
      time: "2018-03-02T10:34:00.000Z",
    },
    {
      id: 8,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2018-03-02T10:33:30.000Z",
    },
    {
      id: 9,
      sourceAccount: "A",
      targetAccount: "D",
      amount: 250,
      category: "other",
      time: "2018-03-02T10:34:57.000Z",
    },
    {
      id: 10,
      sourceAccount: "A",
      targetAccount: "D",
      amount: 250,
      category: "other",
      time: "2018-03-02T10:33:05.000Z",
    },
    {
      id: 11,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2019-03-02T10:33:00.000Z",
    },
    {
      id: 12,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2019-03-02T10:33:50.000Z",
    },
    {
      id: 13,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2019-03-02T10:34:30.000Z",
    },
    {
      id: 14,
      sourceAccount: "A",
      targetAccount: "C",
      amount: 250,
      category: "other",
      time: "2019-03-02T10:33:00.000Z",
    },
    {
      id: 15,
      sourceAccount: "A",
      targetAccount: "C",
      amount: 250,
      category: "other",
      time: "2019-03-02T10:33:05.000Z",
    },
    {
      id: 16,
      sourceAccount: "A",
      targetAccount: "D",
      amount: 250,
      category: "other",
      time: "2019-03-02T10:32:20.000Z"
    },
    {
      id: 17,
      sourceAccount: "A",
      targetAccount: "D",
      amount: 250,
      category: "other",
      time: "2019-03-02T10:34:00.000Z",
    },
    {
      id: 18,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2019-03-02T10:33:30.000Z",
    },
    {
      id: 19,
      sourceAccount: "A",
      targetAccount: "D",
      amount: 250,
      category: "other",
      time: "2019-03-02T10:34:57.000Z",
    },
    {
      id: 20,
      sourceAccount: "A",
      targetAccount: "D",
      amount: 250,
      category: "other",
      time: "2019-03-02T10:33:05.000Z",
    },
];

//funcionalidada para comprobar dos transacciones y verificar si son duplicadas
const filterByDuplicates = transactionIndex =>{
  return (transaction) => 
      transactionIndex.sourceAccount === transaction.sourceAccount &&
      transactionIndex.targetAccount === transaction.targetAccount &&
      transactionIndex.amount === transaction.amount &&
      transactionIndex.category === transaction.category &&
      Math.abs(new Date(transactionIndex.time).getTime()-new Date(transaction.time).getTime())<60000
}

//función para comprobar si hay más transaciones duplicadas. Lo primero que hace es modificar
//el array de transactions (transacciones) para eliminar aquellas que ya están identificadas
//como duplicadas, para no duplicar valores en el array de salida. 
//Después recorre cada elemento del arrey temporal resultTemp para buscar más transacciones duplicadas
function checkDuplicates({resultTemp,transactions}){
    for(let index_temp=0;index_temp<resultTemp.length;index_temp++){
        //Modificamos transactions para quitar las transaciones duplicadas que ya están en resultTemp
        transactions = transactions.filter(element => !resultTemp.includes(element))
        const duplicatedTransactions = transactions.filter(filterByDuplicates(resultTemp[index_temp]))
        if (Array.isArray(duplicatedTransactions)){ 
            resultTemp = [...resultTemp, ...duplicatedTransactions]
        }
    }
    return resultTemp
}

//función principal
function duplicatedTransactions(transactions){
  let output = [] //En este objeto se almacenarán los arrays con las transacciones duplicadas
  for(let index = 0; index<transactions.length; index++){
     //Hacemos un primer filtrado para localizar transacciones duplicadas y las almacenamos
     //en un array temporal llamado resultTemp
     let resultTemp= transactions.filter(filterByDuplicates(transactions[index]))

    //Supongamos que tenemos 4 transacciones con todos los parámetros idénticos pero con los siguientes
    //tiempos de ejecución: A [10:00:00] // B[10:00:55] // C[10:01:45] // D[10:02:30]
    //En un primer filtrado, se identificarán que las transacciones A y B son duplicadas, pero
    //las transacciones C y D no se identificarán porque su tiempo de ejecución en relación con la
    //transacción A es superior a 1 minuto. El array temporal resultTemp tendrá almacenada las transacciones
    //A y B. Entonces en el siguiente paso se necesita recorrer este array para comprobar si B tiene transacciones
    //duplicadas. Cuando se ejecute el código, identificará C. Como ahora el array temporal ha cambiado, se necesita
    //comprobar si C tiene transacciones duplicadas, cuando se ejecute el código, encontrará a D. Si en uno
    //de estos recorridos, no encuentra más transacciones duplicadas, termina y se pasa al siguiente elemento de
    //transacciones para tratar de identificar otro grupo distinto de transacciones duplicadas
    tempArray = checkDuplicates({resultTemp, transactions})

     //La lista con las transacciones duplicadas se encuentra en output
     //Si una transacción no tiene duplicidad entonces no se incorpora a la lista output
     if(tempArray.length>1){
        output.push(tempArray)
     }
     //Modificamos transactions para quitar los duplicados del array temporal resultTemp
     // que acabamos de introducir en el array output
     transactions = transactions.filter(element => !tempArray.includes(element))
    //Al modificar el array transactions, volvemos a inicializar el index del bucle for
    index = -1
  }

  //Para comprobar si funciona el código
  //Lista con las transacciones duplicadas agrupadas
  console.log("Primer grupo:")
  for(i=0;i<output.length;i++){
      for(j=0;j<output[i].length;j++){
          console.log(output[i][j].id)
      }
      console.log("Siguiente grupo:")
  }
}

duplicatedTransactions(transactions)
