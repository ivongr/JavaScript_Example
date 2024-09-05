//recorrer una matriz
/*const numbers = [1,2,3,4,5];
const length = numbers.length;
for (let i = 0; i < length; i++){
    numbers[i] *= 2;
}

console.log(numbers);*/

/*const listA = [1,2,3];
const listB = new Array(6); //valor de 6

console.log(listA.length); //longitud/tama;o del arreglo

//listB.length = 2 ** 32; //error por el **
//console.log(listB.length);

const listC = new Array("gfkfgs"); //error por num negativo
console.log(listC.length);*/

const numbers = [1,2,3,4,5];

if (numbers.length > 3){
    numbers.length = 3;
}//sol0 toma los primeros tres

//console.log(numbers);
//console.log(numbers.length);
//console.log(numbers[2]);

//crear matriz vacia con un tama;o fijo
const numbersempty = [];
numbersempty.length = 3;
console.log(numbersempty); //vacio x 3 

