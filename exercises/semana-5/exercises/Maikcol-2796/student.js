class Student {
  #name
  #lastName
  constructor(name, lastName) {
    this.#name = name;
    this.#lastName = lastName;
  }
  getName() {
    return `${this.#name} ${this.#lastName}`;
  }
  static species() {
    return `It's human`;
  }
}
const studentsInfo = [
  { name: "Ana", lastName: "García", grades: [3, 5, 4, 4.5] },
  { name: "Luis", lastName: "Pérez", grades: [4.5, 4, 4, 5] },
];

async function calculateAverages(students) {
  let averages = {};
  for (let student of students) {
    let average;
    let accumulated = 0;
    let name = `${student.name} ${student.lastName}`;

    for (let grade of student.grades) {
      accumulated += grade;
    }

    average = accumulated / student.grades.length;

    let averageSquare = average ** 2;
    averages[name] = averageSquare;
  }
  return averages;
}
calculateAverages(studentsInfo)
  .then((response) => {
    students = Object.entries(response);
    for (let d of students) {
      console.log(`El promedio de ${d[0]} es ${d[1].toFixed(2)}`);
    }
    return students;
  })
  .catch((err) => console.log(err));
