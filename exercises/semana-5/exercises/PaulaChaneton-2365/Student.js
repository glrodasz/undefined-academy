class Student {

    #name;
    #lastName;
    scores;

    constructor(name, lastName, scores) {
        this.#name = name;
        this.#lastName = lastName;
        this.scores = scores;
    }

    get fullName() {
        return `${this.#name} ${this.#lastName}`;
    }

    static fromObject(obj) {
        const { name, lastName, scores } = obj;
        return new Student(name, lastName, scores);
    }

}


let students1A = [
    { name: "Ana", lastName: "Garcia", scores: [3, 5, 4, 4, 5] },
    { name: "Luis", lastName: "Perez", scores: [4, 5, 1, 4, 5] }
]

students1A.push ({name:"Juan", lastName:"Lopez",scores: [7,6,8,]})

console.log(students1A)

function calculateAverange(students) {

    const averages = students.map(({ name, lastName, scores }) => {

        const student = `${name} ${lastName}`
        //const student = Student.fromObject({ name, lastName, scores })
        
        const scoresSum = scores.reduce((acum, score) => acum + score)

        const average = scoresSum / scores.length;

        const average2 = average**2

        return {
            fullName: student,
            //   fullName: student.fullName,
            average: average?.toFixed (2) ?? "N/A",
            average2: average2?.toFixed (2) ?? "N/A"
        }

    }
    )
    console.log(averages)

    averages.forEach(({ fullName, average }) => console.log(`${fullName}: ${average}`))

}


calculateAverange(students1A)