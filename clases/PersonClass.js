class Person{
    constructor (name,birthYear){
        this.name = name;
        this.birthYear = birthYear;
    }

    greet(){
        console.log(`Hola, mi nombre es ${this.name}`);
    }

    getAge(){
        const currentYear = Person.getCurrentYear();
        return currentYear - this.birthYear;
        
    }

    static getCurrentYear(){
        return new Date().getFullYear();//obtener el año actual
    }
}

/* Llamar al método */
const person = new Person("Ivon",2001);
person.greet();//Devuelve el método
console.log(person.getAge())