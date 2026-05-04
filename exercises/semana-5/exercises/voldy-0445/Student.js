class Student {
    #name;
    #lastname;

    constructor (name, lastname) {
        this.#name = name;
        this.#lastname = lastname;
    }

    get fullname() {
        return `${this.#name} ${this.#lastname}`;
    }

    static fromObject(obj) {
        const {name, lastname} = obj;
        return new Student(name, lastname);
    }
}

const studentsScore = [
    {name: "Juan", lastname: "López", scores: [7, 9, 5, 6]},
    {name: "Marta", lastname: "Valls", scores: [8, 4.5, 6, 5]},
];

function calculateAverage(students){
    const averages = students.map(({name, lastname, scores}) => {

        const student = Student.fromObject({name, lastname});
    
        const scoresSum = scores.reduce((acum, score) => acum + score ** 2);
    
        const average = scoresSum / scores.length;

        return {
            fullname: student.fullname,
            average: average?.toFixed(2) ?? "N/A"
        }
    })

    averages.forEach(({fullname, average}) => {
        console.log(`${fullname}: ${average}`);
    })
}

calculateAverage(studentsScore)