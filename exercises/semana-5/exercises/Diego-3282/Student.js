const estudiantesInfo = [
  { nombre: "Ana", apellido: "García", calificaciones: [3, 5, 4, 4.5] },
  { nombre: "Luis", apellido: "Pérez", calificaciones: [4.5, 4, 4, 5] },
];

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

  static fromObject(object) {
    const { nombre, apellido } = object;
    return new Student(nombre, apellido);
  }
}

function calculateAverage(students) {
  const averanges = students.map(({ nombre, apellido, calificaciones }) => {
    const student = Student.fromObject({ nombre, apellido });

    const scoresSum = calificaciones.reduce(
      (total, calificacion) => total + calificacion ** 2
    );

    const promedio = scoresSum / calificaciones.length;

    return {
      nombreCompleto: student.fullName,
      promedio: promedio?.toFixed(2) ?? "N/A",
    };
  });

  averanges.forEach(({ nombreCompleto, promedio }) => {
    console.log(`${nombreCompleto}: ${promedio}`);
  });
}

calculateAverage(estudiantesInfo);
