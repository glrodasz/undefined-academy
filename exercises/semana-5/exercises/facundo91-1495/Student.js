class Student {
    #name;
    #lastname;

    constructor(name, lastname) {
        this.#name = name;
        this.#lastname = lastname;
    }

    get fullName() {
        return `${this.#name} ${this.#lastname}`;
    }

    static fromObject(obj) {
        const { name, lastname } = obj;
        return new Student(name, lastname);
    }

}

const studentsInfo = [ 
    {name: "Ana", lastname: "Garcia", scores: [3,5,4,4.5]},
    {name: "Luis", lastname: "Perez", scores: [4.5,4,4,5]},
]

function calculateAverage(students) {
    const average = students.map(({name, lastname, scores}) => {
        const student = Student.fromObject({name, lastname})
        const scoreSum = scores.reduce((acum, score) => acum + score)
        const average = scoreSum / scores.length;

        return {
            fullName: student.fullName,
            average: average?.toFixed(2) ?? "N/A",
        }
    })
    average.forEach(({fullName, average}) => {
        console.log(`${fullName}: ${average}`);
    }) 
}

calculateAverage(studentsInfo);