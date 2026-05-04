class Student {
  #name;
  #lastName;

  constructor(name, lastName) {
    this.#name = name;
    this.#lastName = lastName;
  }

  get fullName() {
    return `${this.#name} ${this.#lastName}`;
  }

  static fromObject(obj) {
    const { name, lastName } = obj;
    return new Student(name, lastName);
  }
}

const noa = new Student('Noa', 'Salgado');
console.log(noa.fullName);

const studentsInfo = [
  { name: 'Ana', lastName: 'García', scores: [3, 5, 4, 4.5] },
  { name: 'Luis', lastName: 'Pérez', scores: [4.5, 4, 4, 5] },
];

const calculateAverages = (students) => {
  const averages = students.map(({ name, lastName, scores }) => {
    const student = Student.fromObject({ name, lastName });

    const scoresSum = scores.reduce((acc, sum) => sum ** 2 + acc);
    const average = scoresSum / scores.length;

    return {
      fullName: student.fullName,
      average: average?.toFixed(2) ?? 'N/A',
    };
  });

  averages.forEach((average) => console.log(average));
};

calculateAverages(studentsInfo);
