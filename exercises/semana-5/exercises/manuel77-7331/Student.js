const studentInfo = [
    { name: "Ana", lastname: "García", score: [3, 5, 4, 4.5] },
    { name: "Luis", lastname: "Pérez", score: [4.5, 4, 4, 5] },
];

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
        const { name, lastname } = obj;
        return new Student(name, lastname);
    }
}

async function average(params) {
    let average;
    const averages = params.map(({ name, lastname, score }) => {
        const student = Student.fromObject({
            name, lastname
        })

        for (let i = 0; i < params.length - 1; i++) {
            let c = score.reduce((acum, qualification) => acum + qualification)
            average = c / score.length;
        }
        return `${name} ${lastname} "your average:" ${average ** 2}`;
    })
    return averages
}

console.log(average(studentInfo))