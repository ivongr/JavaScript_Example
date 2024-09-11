export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

export function printName(user){
    console.log(`El nombre dwl usuario es ${user.name}`);
}

export function printAge(user){
    console.log(`La edad del usuario es ${user.age}`);
}