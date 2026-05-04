

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

    static fromObjec(obj) {
        const { name, lastname } = obj;
        return new Student(name, lastname);
    }
 

}
const studentsInfo = [
        { name: "Ana", lastname: "García", score: [3, 5, 4, 4.5] },
        { name: "Luis", lastname: "Pérez", score: [4.5, 4, 4, 5] },
        { name: "Pablo", lastname: "López", score: [4, 6, 3, 2] },
        { name: "Juan", lastname: "González", score: [3, 5, 4, 6] },

    ];

function calculateAverage(students) {
    const averages = students.map(({ name, lastname, score }) => {
        const student = Student.fromObjec({
            name, lastname
        })
        const scoreSum = score.reduce((acum, score) => acum + score)

        const average = scoreSum / score.length;

        return {
            fullname: student.fullname,
            averages: (average**2)?.toFixed(2) ?? "N/A"
        }
        

    })

    averages.forEach(({fullname, averages }) => {
        console.log(`${fullname} ${averages}`)
    })

}

calculateAverage(studentsInfo)