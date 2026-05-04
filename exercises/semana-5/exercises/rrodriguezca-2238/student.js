
class Student {                  
    #name;   
    #lastName;

    constructor(name, lastName) {
        this.#name = lastName;
        this.#lastName = lastName;
    }

    get fullName() {                  
        return `${this.#name} ${this.#lastName}`;
    }

    static fromObject(obj) {    
        const {name, lastName} = obj;        
        return new Student(name, lastName);
    }
}

const studentsInfo = [
    { name: "Ana", lastName: "García", grades: [3, 5, 4, 4.5] },
    { name: "Luis", lastName: "Pérez", grades: [4.5, 4, 4, 5] },
]

function calculateAverages(students) {
    const averages = students.map(({ name, lastName, grades }) => {   
        const student = Student.fromObject({ name, lastName })  
        const averagesSum = grades.reduce((acum, grade) => acum + grade, 0)  
        const average = averagesSum / grades.length;

        return {
            fullName: student.fullName,
            average: average !== undefined ? average.toFixed(2) : "N/A"  
        }
    })

    averages.forEach(({ fullName, average }) => {
        console.log(`${fullName}: ${average ** 2}`)
    });
}

calculateAverages(studentsInfo)
