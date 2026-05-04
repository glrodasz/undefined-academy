    class Student{
        #name;
        #lastname;

        constructor(name, lastname){
            this.#name = name;
            this.#lastname = lastname;
        }

        get fullname(){ 
            return `${this.#name} ${this.#lastname}`;
        }
        static fromObject(obj){
            const {name, lastname} = obj;
            return new Student(name, lastname);
    }
    }
    const studentsInfo = [
        { name: 'Ana', lastname: 'García', scores: [3, 5, 4, 4.5] },
        { name: 'Luis', lastname: 'Pérez', scores: [4.5, 4, 4, 5] }
    ];

    function calculateAverageCalifications(students){
        const averages = students.map(({ name, lastname, scores}) => {
            
            const student = Student.fromObject({name,lastname})
        
            const scoreSum = scores.reduce((acum,score) => acum + score)

            const average = scoreSum / scores.length;
            return {
                fullname: student.fullname,
                average: average?.toFixed(2) ?? "N/A"
            }
    })

    averages.forEach(({fullname, average}) =>{
        console.log(`${fullname}: ${average}`);
    })
        
    }
    calculateAverageCalifications(studentsInfo)

