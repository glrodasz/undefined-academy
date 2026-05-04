/*** Estudiantes ***/
const estudiantesInfo = [
  { nombre: "Ana", apellido: "García", calificaciones: [3, 5, 4, 4.5] },
  { nombre: "Luis", apellido: "Pérez", calificaciones: [4.5, 4, 4, 5] },
];

/*** Clase Estudiante ***/
class Estudiante {
  #nombre;
  #apellido;

  constructor(nombre, apellido) {
    this.#nombre = nombre;
    this.#apellido = apellido;
  }

  get nombreCompleto() {
    return `${this.#nombre} ${this.#apellido}`;
  }

  static fromObject(obj) {
    return new Estudiante(obj.nombre, obj.apellido);
  }
}

/*** Funcion async para calcular el promedio de las calificaciones de cada estudiante ***/
async function calcularPromedios(estudiantes) {
  const resultados = [];

  for (let estudiante of estudiantes) {
    let promedio = estudiante.calificaciones.reduce(
      (acumulador, calificaciones) => acumulador + calificaciones,
      0
    );
    promedio /= estudiante.calificaciones.length;
    promedio = promedio.toFixed(2);
    resultados.push({ nombreCompleto: estudiante.nombreCompleto, promedio });
  }

  return resultados;
}

/*** Mapeo de estudiantes a objetos ***/
const estudiantes = estudiantesInfo.map(function (info) {
  const estudiante = Estudiante.fromObject(info);
  estudiante.calificaciones = info.calificaciones;
  return estudiante;
});

/*** Calcular promedios y mostrarlos ***/
calcularPromedios(estudiantes).then(function (resultados) {
  for (let resultado of resultados) {
    console.log(`- ${resultado.nombreCompleto} tiene un promedio de ${resultado.promedio} puntos.`);
  }
});

/************************************************** 
 * ESTA SERIA LA FUNCION PARA LOS PROMEDIOS DE LAS CALIFICACIONES AL CUADRADO

async function calcularPromedios(estudiantes) {
  const resultados = [];

  for (let estudiante of estudiantes) {
    let promedio = estudiante.calificaciones.reduce(
      (acumulador, calificaciones) => acumulador + calificaciones**2,
      0
    );
    promedio /= estudiante.calificaciones.length;
    promedio = promedio.toFixed(2);
    resultados.push({ nombreCompleto: estudiante.nombreCompleto, promedio });
  }

  return resultados;
}

*************************************************/
