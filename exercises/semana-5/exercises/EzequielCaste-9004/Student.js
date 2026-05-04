class Student {
  #name
  #lastName
  constructor(name, lastName) {
    this.#name = name
    this.#lastName = lastName
  }
  get fullName() { 
    return `${this.#name} ${this.#lastName}`
  }
  static fromObject(obj) {
    const {nombre, apellido} = obj;
    return new Student(nombre, apellido)
  }
}

const estudiantesInfo = [
  { nombre: "Ana", apellido: "García", calificaciones: [3, 5, 4, 4.5] },
  { nombre: "Luis", apellido: "Pérez", calificaciones: [4.5, 4, 4, 5] },
  ];

async function calcularPromedios(studentList) {
  const average = [];

  for (student of studentList) {
    let aux = 0;

    const studentAux = Student.fromObject(student);

    for (note of student.calificaciones) {
      aux = aux + note      
    }

    average.push({
      nombre: studentAux.fullName,
      promedio: (aux / student.calificaciones.length) ** 2,
    });
    
  }

  return average
} 

const student1 = new Student('John', 'Doe')

calcularPromedios(estudiantesInfo)
.then(data => {
  for(student of data) {
    console.log(student.nombre, student.promedio)
  }
})