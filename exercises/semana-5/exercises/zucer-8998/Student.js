class Student {
    #name
    #lastName

    constructor(name, lastName) {
        this.#name = name
        this.#lastName = lastName
    }

    get fullName() {
        return `${this.#name} ${this.#lastName}`
    }

    static fromObject({name, lastName}) {
        return new Student(name, lastName)
    }
}

/**
 * Calculate the arithmetic average from number array
 * @param {number[]} values 
 * @returns 
 */
const average = (values) => {
    const sum = values.reduce((acc, current) => acc + current, 0)
    return sum / values.length || 0
}

/**
 * Return an Array with students fullName and score average
 * @param {[]} students 
 * @returns {{fullName: string, averageScore: number}}
 */
const calculateStudentsAverage = async (students) => {
    return students.map((student) => {
        const currentStudent = Student.fromObject(student)
        const averageScore = average(student.scores)
        return {
            fullName: currentStudent.fullName,
            averageScore
        }
    })
}

/**
 * Print console message with all students average
 * @param {[]} averages 
 */
const printStudentsAverage = (averages) => {
    averages.forEach(
        ({fullName, averageScore}) => 
        console.log(`Name: ${fullName} |  Score: ${averageScore.toFixed(2)}`)
    )
}

// --------------------- Program execution -------------------

const studentsInfo = [
    { name: 'Ana', lastName: 'García', scores: [3, 5, 4, 4.5] },
    { name: 'Luis', lastName: 'Pérez', scores: [4.5, 4, 4, 5] },
    { name: 'Carlos', lastName: 'Martinez', scores: [4.5, 1, 3, 3.5] },
    { name: 'Julián', lastName: 'Sucerquia', scores: [4.5, 3, 2.5, 5] },
    { name: 'Katherine', lastName: 'Uribe', scores: [4, 4, 4, 5] },
  ];

calculateStudentsAverage(studentsInfo).then(printStudentsAverage)