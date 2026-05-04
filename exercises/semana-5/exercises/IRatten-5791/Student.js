class Student {
  name;
  lastName;
  notes;

  constructor(name, lastName, notes) {
    this.name = name;
    this.lastName = lastName;
    this.notes = notes;
  }

  getName() {
    return this.name + " " + this.lastName;
  }

  static fromObject(object) {
    const { name, lastName, notes } = object;
    return new Student(name, lastName, notes);
  }

  toString() {
    return this.name + " " + this.lastName + " " + this.notes;
  }

  async calculateAverage(students) {
    for (let student of students) {
      let { notes } = student;

      notes = notes.map(note => note ** 2);
      const sum = await notes.reduce((previous, current) => current += previous);
      console.log(`${student.getName()} has ${sum / notes.length} In notes average`);
    }
  }
}

const studentsInfo = [
  { name: 'Ana', lastName: 'García', notes: [3, 5, 4, 4.5] },
  { name: 'Luis', lastName: 'Pérez', notes: [4.5, 4, 4, 5] }
];

const students = studentsInfo.map((student) => {
  return Student.fromObject(student);
});

let st1 = new Student().calculateAverage(students);