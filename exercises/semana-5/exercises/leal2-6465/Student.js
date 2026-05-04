const studentData = [
  { name: "Alexandra", lastname: "Reds", qualifications: [4.5, 5, 4.5, 5] },
  { name: "Joseph", lastname: "Smith", qualifications: [3, 4, 3, 5] },
];

class Student {
  #name;
  #lastname;
  constructor(name, lastname, qualifications) {
    this.#name = name;
    this.#lastname = lastname;
    this.qualifications = qualifications;
  }

  get fullName() {
    return `my name is ${this.#name} and my last name is ${this.#lastname} `;
  }

  static fromObject(object) {
    const { name, lastname, qualifications } = object;
    return new Student(name, lastname, qualifications);
  }
}

function calcular(score) {
  return (score.reduce((acum, score) => acum + score) / score.length) ** 2;
}

const newStudents = studentData.map((data) => Student.fromObject(data));
newStudents.forEach((obj) => {
  let scores = calcular(obj.qualifications);
  console.log(`${obj.fullName}my score is ${scores.toFixed(2)}`);
});
