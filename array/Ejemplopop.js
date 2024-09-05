//Elimina el último elemento del array

const fruit = ["manzana","platano","naranja"];
const ultiFruit = fruit.pop();
console.log(fruit);
console.log(ultiFruit);

const plants = ["brocoli","coliflor","calabaza","tomate","ajo"];

console.log(plants.pop()); //mostrar último elemento ajo
console.log(plants); //mostrar array sin el elemento ajo
plants.pop(); //quitar otro elemento tomate
console.log(plants); // array ["brocoli","coliflor","calabaza"]
plants.pop(); //quitar otro elemento tomate
console.log(plants);