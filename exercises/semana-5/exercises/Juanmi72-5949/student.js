class Student {
    #name;
    #lastname;
    constructor(name, lastname){
        this.#name = name;
        this.#lastname = lastname;
    }
    get fullName(){
        return `Mi nombre es ${this.#name} y mi apellido es ${this.#lastname}`;
    }

    static fromObjet(obj){
        const {name, lastname} = obj;
        return new Student(name, lastname);
    }   

}


const studentsInfo = [
        { name: "Ana", lastname:"García", scores: [3, 5, 4, 4.5] }, 
        { name: "Luis", lastname:"Pérez", scores: [4.5, 4 ,4, 5] },
    ];


let obj = {name: "Ana", lastname:"García"};
let student = Student.fromObjet(obj);
console.log(student);


async function calculateAverage(arrayStudent){
    return new Promise((resolve, reject) => {
        if (Array.isArray(arrayStudent)) {
            resolve(arrayStudent);
            // Calcular el average de las calificaciones al cuadrado 
            const average = arrayStudent.map((student) => {
                const {name, lastname, scores} = student;
                const sum = scores.reduce((acc, score) => acc + score*score, 0);
                console.log(`El Estudiante ${name} ${lastname} tiene un promedio al cuadrado de ${Math.round(sum/scores.length)}`)
                return sum/scores.length;
            }
            );
        } else {
            reject(new Error('El valor ingresado no es un array'));
        }
    });
}

calculateAverage(studentsInfo)
    .then(result => console.log(result))
    .catch(result => console.log('Error'))
    .finally(result=> console.log('finalizada la promesa'));

console.log(typeof(studentsInfo));
