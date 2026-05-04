class Estudiante {
    #nombre;
    #apellido;

    constructor(nombre, apellido){
        this.#nombre = nombre;
        this.#apellido = apellido;
    }

    get fullName(){
        return `${this.#nombre} ${this.#apellido}`
    }

    static fromObject( obj ){
        const {nombre, apellido} = obj;
        return new Estudiante(nombre, apellido);
    }

}

const estudiantesInfo = [
    { nombre: "Ana", apellido: "García", calificaciones: [3, 5, 4, 4.5] },
    { nombre: "Luis", apellido: "Pérez", calificaciones: [4.5, 4, 4, 5] },
];

function calcularPromedios(estudiantes) {
    
    const promedios = estudiantes.map(({nombre, apellido, calificaciones}) =>{
        
        const estudiante = Estudiante.fromObject({nombre, apellido});
        
        const scoresSum = calificaciones.reduce( (acum, calificacion) =>
            acum + calificacion ** 2
        );

        const average = scoresSum / calificaciones.length;

        return {
            fullName: estudiante.fullName,
            average,
        }

    });

    promedios.forEach(({fullName, average}) => {
        console.log(`${fullName} ${average}`)
    })

}

calcularPromedios(estudiantesInfo);