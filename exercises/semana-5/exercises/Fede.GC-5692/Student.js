class Student {
    #name;
    #lastname;

    constructor(name, lastname) {
        this.#name = name;
        this.#lastname = lastname;
    }

    get fullname() {
        return `${this.#name} ${this.#lastname}`
    }

    static fromObject(obj) {
        const { name, lastname } = obj;
        return new Student(name, lastname);
    }
}

const studentsInfo = [
    { name: 'Ana', lastname: 'García', grades: [3, 5, 4, 4.5] },
    { name: 'Luis', lastname: 'Pérez', grades: [4.5, 4, 4, 5] }
];


gradeSquaredAverages = async (students) => {
    debugger
    const studentsAverages = await students.map(({ name, lastname, grades }) => {
        const student = Student.fromObject({ name, lastname })
        const gradesSquaredSum = grades.reduce((acum, grade) => acum + grade ** 2);
        const average = (gradesSquaredSum / grades.length);

        return {
            fullname: student.fullname,
            average: average?.toFixed(2) ?? "N/A"
        }
    })

    studentsAverages.forEach(({ fullname, average}) => {
        console.log(`${fullname}: ${average}`);
    } )
}

console.log(gradeSquaredAverages(studentsInfo));