//referencia

function modifyArray(arr){
    arr.push(42);
}let myArray = [1,2,3];
modifyArray(myArray);
console.log(myArray);

/*const a = [1,2,3];
const b = a; //referencia a la const a

a.push(4);

console.log(a); 
console.log(b);*/

/*let a = 10;
let b = a;

a = 20;
console.log(a);
console.log(b); */

//valor
//los datos dentro de la función, no afectan al valor 
//fuera de la función
function modifyNumber(num){
    num = 42;
    console.log(num);
}let originalNum = 10; //copia del valor
modifyNumber(originalNum);
console.log(originalNum);