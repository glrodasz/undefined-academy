
class Estudiante {
  #name;
  #lastname;
  constructor(name, lastname){
    this.#name = name,
    this.#lastname = lastname
  }

  get fullName(){
    return `${this.#name} ${this.#lastname}`;
  }

  static fromObject(obj){
    const { name, lastname } = obj;
    return new Estudiante(name, lastname);
  }
}

const estudiantesInfo = [
  { name: "Ana", lastname: "García", score: [3, 5, 4, 4.5] },
  { name: "Luis", lastname: "Pérez", score: [4.5, 4, 4, 5] },
];

function calcularPromedios(estudiantes){
  estudiantes.map(( {name, lastname, score} )=>{
    const student = Estudiante.fromObject( {name, lastname} );

    let total = 0;
    for( const numberScore of score ){ total = total + numberScore }
    let promedio = total / score.length;
    let average = promedio**2;

    console.log( `${student.fullName}: ${average.toFixed(2)}` );

  });  
}

calcularPromedios(estudiantesInfo);