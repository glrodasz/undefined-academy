const studentData = [
    { name: "Alexandra", lastname: "Reds", qualifications: [4.5, 5, 4.5, 5] },
    { name: "Joseph", lastname: "Smith", qualifications: [3, 4, 3, 5] }
]


class Student {
    #name;
    #lastname;

    constructor(name, lastname, qualifications) {
        this.#name = name;
        this.#lastname = lastname;
        this.qualifications = qualifications;
    }

    get fullName() {
        return `my name is ${this.#name} and my last name is ${this.#lastname} `
    }

    static fromObject(object) {
        const { name, lastname, qualifications } = object;
        return new Student(name, lastname, qualifications);
    }
}

function calculate(score) {
    return (((score.reduce((accum, score) => accum + score)) / score.lenght) ** 2)
}

const newStudents = studentData.map(data => Student.fromObject(data));


newStudents.forEach((obj) => {
    let scores = calculate(obj.qualifications)
    console.log(`${obj.fullName} my score is ${scores.toFixed(2)}`);
});






// console.log(averageQualifications(newStudents.map(data => data.qualifications)))

// console.log(newStudents.map(data => data.qualifications))

