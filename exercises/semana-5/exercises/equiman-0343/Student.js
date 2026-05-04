class Student {
    #firstName
    #lastName

    constructor(firstName, lastName) {
        this.#firstName = firstName
        this.#lastName = lastName
    }

    getFullName() {
        return `${this.#firstName} ${this.#lastName}`
    }

    static fromObject({firstName = '', lastName = ''}) {
        return console.table({firstName, lastName })
    }
}

const firstStudent = new Student('Camilo', 'Martinez')
const completeName = firstStudent.getFullName()
const expectedName = 'Camilo Martinez'
console.log(expectedName)
console.assert(completeName === expectedName, '%o', {expectedName, errorMsg: 'is not the expected full name'})

const studentDefinition = Student.fromObject({firstName: 'Alvaro', lastName: 'Capaceta'})


const calcNotesAverage = (notes) => {
    const averageNotesPowered = (notes.reduce((acc, act) => acc + act) / notes.length) ** 2
    return Math.round(averageNotesPowered)
}

const calcStudentsAverage = async (students) => {
    return students.map((student) => ({...student, average: calcNotesAverage(student.notes)}))
}

const printStudentsAverage = (students) => {
    const studentList = students.map((student) => ({name: `${student.firstName} ${student.lastName}`, average: student.average}))
    console.table(studentList)
}

const studentsInfo = [
    {
        firstName: 'Ana',
        lastName: 'García',
        notes: [3, 5, 4, 4.5]
    },
    {
        firstName: 'Luis',
        lastName: 'Pérez',
        notes: [4.5, 4, 4, 5]
    }
];

const assertionTest = (students) => {

    const expectedStudent = {
        name: 'Ana García',
        average: 17
    }
    const expected = JSON.stringify(expectedStudent)
    const {firstName, lastName, average} = students[0]
    const expectedResult = {
        name: `${firstName} ${lastName}`,
        average: average
    }
    const result = JSON.stringify(expectedResult)

    console.assert(result === expected, '%o', {expected, result, errorMsg: 'is not the expected student information'})
}

(async () => {
    const students = await calcStudentsAverage(studentsInfo)
    printStudentsAverage(students)
    assertionTest(students)
})()