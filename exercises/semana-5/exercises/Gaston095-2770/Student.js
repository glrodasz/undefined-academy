const studentsInfo = [
    {
        name: 'Ana',
        lastname: 'García',
        scores: [3, 5, 4, 4.5] 
    },
    { 
        name: 'Luis',
        lastname: 'Pérez',
        scores: [4.5, 4, 4, 5] 
    }
];

//Clase Student con campos privados para name y lastname, un getter para el nombre completo y un método estático fromObject.
class Student {
    #name;
    #lastname;

    constructor(name, lastname) {
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




function calculateAverage(students) {
    const averages = students.map(({ name, lastname, scores}) => {

        const student = Student.fromObject({
            name, lastname
        })

        const scoresSum = scores.reduce((acum, score) => acum + score, 0)

        const average = scoresSum / scores.length;

        return {
            fullname: student.fullname,
            average: average?.toFixed(2) ?? "N/A"
        }

    })

    averages.forEach(({ fullname, average}) => {
        console.log(`${fullname}: ${average}`);
    })
}

calculateAverage(studentsInfo)