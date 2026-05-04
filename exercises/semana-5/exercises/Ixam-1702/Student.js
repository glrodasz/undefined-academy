const studentsInfo = [
  { name: "Ana", lastname: "García", grades: [3, 5, 4, 4.5] },
  { name: "Luis", lastname: "Pérez", grades: [4.5, 4, 4, 5] },
  { name: "Miguel", lastname: "Diaz", grades: [4.5, 4.5, 3, 5] }
];

class Student {
  #name = "";
  #lastname = "";

  constructor(name, lastname) {
    this.#name = name;
    this.#lastname = lastname;
  }

  get fullname() {
    return this.#name + " " + this.#lastname;
  }

  static fromObject(obj) {
    const { name, lastname } = obj;
    return new Student(name, lastname);
  }
}

async function calculateAverage(students) {
  const averages = Object.keys(students).map((key) => {
    const value = students[key];
    const student = Student.fromObject(value);
    const sumGrades = value.grades.reduce((sum, grade) => sum + grade ** 2, 0);
    const average = sumGrades / value.grades.length;
    return {
      fullname: student.fullname,
      average: average.toFixed(2)
    };
  });
  return averages;
}

async function printAverages(students) {
  const fullNamesWithAverages = await calculateAverage(students);
  fullNamesWithAverages.forEach(({ fullname, average }) => {
    console.log(`${fullname}: ${average}`);
  });
}

printAverages(studentsInfo);
