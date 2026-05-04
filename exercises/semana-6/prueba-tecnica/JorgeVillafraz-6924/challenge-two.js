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

const sortedByDate = (a, b) => new Date(a.time) - new Date(b.time);

const codeAssign = ({ sourceAccount, targetAccount, amount, category }) => {
    return `${sourceAccount}${targetAccount}${category}${amount}`;

}

const groupedByCode = (acc, curr) => {
    const code = codeAssign(curr);

    acc[code] = acc[code] || [];
    acc[code].push(curr);

    return acc;
}

const groupingBySimilarTime = (acc, element) => {
    const { time } = element;
    const TIME_DIFF = 60 * 1000;

    if (acc.length == 0) {
        acc.push([element])

        //buscar como mejorar esta parte del codigo para hacerla mas entendible    
    } else if (new Date(time) - new Date(acc[acc.length - 1][acc[acc.length - 1].length - 1].time) <= TIME_DIFF) {

        acc[acc.length - 1].push(element);

    } else {
        acc.push([element]);
    }
    return acc;
}

/*aca se aplica reduce a cada grupo para que se compruebe si cumplen con el requisito
de tiempo para considerarse duplicadas, las transacciones que pasen la comprobacion 
las acumula en un array por cada code
*/
const mappingByGroup = (group) => {
    return group.reduce(groupingBySimilarTime, []);
}
//se ordenan las transacciones por fecha de mas antigua a mas reciente
const arraySortedByDate = transactions.sort(sortedByDate);

// se agrupan en un objeto por un code creado por transaccion
const groupWithCode = arraySortedByDate.reduce(groupedByCode, {});

// De cada grupo generado en el objeto se extraen los valores agrupados en un array

const groupedBycodeInArray = Object.values(groupWithCode)

/*se le aplica la funcionalidad a cada array de transacciones de cada code
 para comparar si el tiempo entre trasaccion  es menor a 1 minuto y de esta manera 
 agruparlas en transacciones duplicadas
*/
const groupWithCodeMapped = groupedBycodeInArray.map(mappingByGroup).flat();


/*Se muestra el resultado y se filtra mostrando solo las transacciones duplicadas*/

console.info(groupWithCodeMapped.filter(item => item.length > 1));


