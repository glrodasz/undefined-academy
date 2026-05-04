class Student {
  #name;
  #lastName;

  constructor (name, lastName) {
    this.#name = name
    this.#lastName = lastName
  }

  get fullName() {
    return `${this.#name} ${this.#lastName}`;
  }

  // crea un estudiante a partir de un objeto que se le pase a la función estática
  static fromObject(obj) {
    const {name, lastName} = obj;
    return new Student(name, lastName);
  }

}

const studentsInfo = [
  { name: "Ana", lastName: "García", scores: [3, 5, 4, 4.5] },
  { name: "Luis", lastName: "Pérez", scores: [4.5, 4, 4, 5] },
];

function showAveragePerStudent(list) {
  list.forEach(( { name, lastName, scores } ) => {
    const student = Student.fromObject({
      name,
      lastName
    });

    const scoreSquare = scores.map(score => {
      return score ** 2;
    })

    const totalScore = scoreSquare.reduce((ant, curr) => ant + curr);

    const averageScore = (totalScore / scores.length).toFixed(2);
    
    console.log(`${student.fullName} tiene un promedio de: ${averageScore}`);
  })
}

showAveragePerStudent(studentsInfo);
