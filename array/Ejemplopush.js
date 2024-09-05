//agrega un elemento o más al final del arreglo

const animals = ["gato","perro","suki"];

const count = animals.push("pollo");
console.log(count);
console.log(animals);

animals.push("otro suki","gallo");
console.log(animals);

const colors = ["rojo","verde","azul"];
const newLength = colors.push("verde manzano");
console.log(colors);
console.log(newLength);