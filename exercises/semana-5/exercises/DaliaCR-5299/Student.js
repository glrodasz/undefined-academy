const estudiantesInfo = [
    { nombre: "Ana", apellido: "García", calificaciones: [3, 5, 4, 4.5] },
    { nombre: "Luis", apellido: "Pérez", calificaciones: [4.5, 4, 4, 5] },
];

class Student {
    #name;
    #lastname;
    constructor (name, lastname) {
        this.#name = name;
        this.#lastname = lastname;
    }
      // Getter
      get fullname() {
         return `${this.#name} ${this.#lastname}`;
    }

    static fromObject(obj) {
        const { name,lastname} = obj;
        return new Student(name, lastname);
    }
}

    async function promedio(params){
    let promedio;
    const promedios = params.map(({nombre, apellido, calificaciones}) => {
        const student = Student.fromObject({
            nombre, apellido
        })
        
        for (let i=0; i<params.length-1; i++) {
            let c=calificaciones.reduce((acum, calificacion) => acum + calificacion)
            promedio=c/calificaciones.length;
        }
        return `${nombre} ${apellido} "tu promedio es:" ${promedio**2}`;
    })
        return promedios
}

console.log(promedio(estudiantesInfo))
