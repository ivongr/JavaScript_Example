//No devuelve ningun error
/*function imitarForEach(funct,elementos){
    for(let i = 0; i < elementos.length; i++){
        funct(elementos[i]);
    }
}

var sum = imitarForEach(function(elemento){
    var addOne = elemento + 1;
    console.log(addOne);
    return addOne; //la funcion argumento tiene un return
},[1,2,3,4]);

sum;

//2
let numberArray = [1,2,3,4,5];

let returnValue = 
numberArray.forEach(num =>
console.log(`${num} x ${num} = ${num * num}`));

console.log(numberArray);
console.log(returnValue);*/

//3 convertir un bucle for en forEach

const food = ["pizza","sandia","tacos"];
const copyFoods = [];

//antes
for (let i = 0; i < food.length; i++){
    copyFoods.push(food[i]);
}

//después
food.forEach((foods) => {
    copyFoods.push(foods);
    console.log(foods);
});


    