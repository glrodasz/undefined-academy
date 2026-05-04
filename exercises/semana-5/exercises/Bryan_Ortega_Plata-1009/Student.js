class Student {
  #name
  #lastname
  quialifications
  constructor(name, lastname, quialifications) {
    this.#name = name
    this.#lastname = lastname
    this.quialifications = quialifications
  }

  gettNames() {
    return `${this.#name} ${this.#lastname}`
  }

  static fromObject(obj) {
    let { name, lastname, quialifications } = obj
    return new Student(name, lastname, quialifications)
  }
}

const estudiantesInfo = [
  { name: "Ana", lastname: "García", quialifications: [3, 5, 4, 4.5] },
  { name: "Luis", lastname: "Pérez", quialifications: [4.5, 4, 4, 5] },
]

async function averageCalc(students) {
  for (let student of students) {
    const newStudent = Student.fromObject(student)
    let sum = 0
    newStudent.quialifications.map(function (elem) {
      sum = sum + elem
    })
    let average = (sum / newStudent.quialifications.length) ** 2
    console.log(
      `El estudiante ${newStudent.gettNames()} tiene promedio calificativo de ${average.toFixed(
        2
      )}`
    )
  }
}

averageCalc(estudiantesInfo)
