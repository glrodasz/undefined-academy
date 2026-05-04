// Clase 1, semana 5
// Clase Student + Atributos privados + Getter + static método
// calcularPromedios + fullname + promedio + al cuadrado + templateLiterals

class Student {
    #name;
    #lastname;
    
    constructor(name, lastname){
        this.#name = name;
        this.#lastname = lastname;
    }

    // Get para el nombre completo
    get fullName(){
        return (`${this.#name} ${this.#lastname}`)
    }

    // Método estático que devuelva el nombre+apellido
    static fromObject(obj){
        const { name, lastname } = obj
        return new Student (name + lastname)
    }
}
// **INSTANCIAMOS LA CLASE** (muy importante tener presente que se llama así)
let firstStudent = new Student('Elizabeth', 'Tall')
// console.log(firstStudent.name) // undefined (es un atributo privado)
// console.log(firstStudent.fullName) // Elizabeth Tall



// -- -- -- -- -- -- -- -- //

const studentsInfo = [
    {name: "Helen", lastname: "Smith", score: [10, 10, 10, 10, 10]},
    {name: "Lilith", lastname: "Rodas", score: [5, 2, 8, 5, 4]},
    {name: "Vanessa", lastname: "McKlay", score: [1.1, 5, 7, 6, 2.5]},
    {name: "Viktor", lastname: "Original", score: [10, 0, 9, 2, 5]},
    {name: "Robert", lastname: "Undefined", score: [10, 8, 9, 8, 10]}
]


function calculateAvg (students){
    const avg = students.map(({name, lastname, score})=>{

        const student = Student.fromObject({
            name, lastname
        })

        const scoresSum = score.reduce((acum, score)=> acum + score)

        const avg = scoresSum / score.length
        const avgSquared = avg **2

        return {
            name: name,
            lastname: lastname,
            // fullname: student.fullName,
            avg: avg,
            avgSquared: avgSquared.toFixed(1)
        }
    })

    avg.forEach(({name, lastname, avg, avgSquared})=> {
        console.log(`El estudiante [${name} ${lastname}], tiene un promedio de [${avg}]. Promedio al cuadrado: [${avgSquared}]`)
    })
}
calculateAvg(studentsInfo)