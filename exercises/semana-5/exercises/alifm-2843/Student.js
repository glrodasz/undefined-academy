// ====================== Assignment ====================================

const studentsInfo = [
    { name: "Ana", lastName: "Garcia", scores: [3, 5, 4, 4.5] },
    { name: "Luis", lastName: "Perez", scores: [4.5, 4, 4, 5] },
];

class Student {
    #name;
    #lastName;

    constructor(name, lastName) {
        this.#name = name;
        this.#lastName = lastName;
        }

    get fullName() {
        return `${this.#name} ${this.#lastName}`
    }


    static fromObject(obj) {
        const {name, lastName} =obj;
        return new Student(name, lastName);
    }

}

const popeye = new Student('Pop', "Eyes")
console.log(popeye.fullName); // Pop Eyes


function calculateAverage(students) {
    const averages = students.map(({ name, lastName, scores}) => {
        const student = Student.fromObject({
            name, lastName,
        })

        const scoresSum = scores.reduce((accumulator, score) => accumulator + score)

        const average = scoresSum/scores.length;

        return {
            fullname: student.fullName,
            average: average?.toFixed(2) ?? "N/A"
        }

        
        })

        averages.forEach(({fullname, average}) => {
            console.log(`The student: ${fullname} got ${(average**2).toFixed(2)}`);

    })

}

calculateAverage(studentsInfo);

// Outputs:

/*
Pop Eyes
Ana Garcia: 17.02
Luis Perez: 19.14
*/

