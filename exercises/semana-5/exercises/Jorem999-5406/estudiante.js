const estudiantesInfo = [
  { nombre: "Ana", apellido: "García", notas: [3, 5, 4, 4.5] },
  { nombre: "Luis", apellido: "Pérez", notas: [4.5, 4, 4, 5] },
  { nombre: "Armando", apellido: "Broncas", notas: [3.5, 5, 4, 3] },
  { nombre: "Virgilio", apellido: "Hernández", notas: [4.5, 4, 2, 3] },
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

  static fromObject(info) {
    return new Student(info.nombre, info.apellido);
  }
}

// Procesando los datos y devolviendo array con los nombres y promedios al cuadrado
async function processingData(estudiantesInfo) {

  const namesAndAverages = [];

  for (const info of estudiantesInfo) {
    // Calcula el promedio del estudiante en info
    const squaredAverage = await calcSquaredAverage(info.notas);
    // Crear una instancia de Student para permitir el uso del método fullname
    const studentInstance = Student.fromObject(info)
    // relleno array averages con los datos ya formateados
    namesAndAverages.push(`Estudiante ${studentInstance.fullName}, con Promedio: ${squaredAverage}`);
  }
  return namesAndAverages;
}

// función asíncrona que recibe un array de notas y devuelve el promedio al cuadrado
async function calcSquaredAverage(grades) {
  const total = grades.reduce((sum, notas) => sum + notas, 0);
  const average = total / grades.length;
  return Math.pow(average, 2);
}

// toma los datos resultantes en forma asíncrona
async function getData() {
  try {
    return await processingData(estudiantesInfo);
  } catch (error) {
    console.error(error);
  }
}

//Presentando los datos en consola
getData().then((data => console.log(data)));