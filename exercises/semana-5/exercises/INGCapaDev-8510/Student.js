class Student {
  #name;
  #lastname;

  constructor(name, lastname) {
    this.#name = name;
    this.#lastname = lastname;
  }

  get fullName() {
    const fullname = `${this.#name} ${this.#lastname}`;
    return fullname;
  }

  static fromObject(obj) {
    const { name, lastname } = obj;
    return new Student(name, lastname);
  }
}

const guille = new Student('Guillermo', 'Rodas');
const me = new Student('Alvaro', 'Capaceta');

console.log(me.fullName);
console.log(guille.fullName);

const studentsInfo = [
  { name: 'Ana', lastname: 'Garcia', grades: [3, 5, 4, 4.5] },
  { name: 'Luis', lastname: 'Perez', grades: [4.5, 4, 4, 5] },
];

const getAverage = async (students) => {
  students = [...students];
  const newStudentsArray = [];

  const sumGrades = (total, grade) => {
    return parseFloat(total) + parseFloat(grade);
  };

  for (const studentObject of students) {
    const { grades } = studentObject;
    const student = Student.fromObject(studentObject);
    const gradesSquared = grades.map((grade) => {
      return grade ** 2;
    });

    const gradesAmount = gradesSquared.reduce(sumGrades, 0);
    const average = gradesAmount / gradesSquared.length;

    const fullname = student.fullName;
    const newStudent = { fullname, average };
    newStudentsArray.push(newStudent);
  }

  return newStudentsArray;
};

const getStudentsAverage = async (students) => {
  try {
    const studentsAverage = getAverage(students);
    console.log(studentsAverage);
  } catch (error) {
    console.log(error);
  }
};

getStudentsAverage(studentsInfo);
