//referencia
//Pases un tipo de referencia como argumento a una función
//estas pasando una referencia del objeto original
//cualquier cambio que se haga en el objeto dentro de la función, también afectará
//sl objeto original fuera de la función
function modifyArray(arr){
    arr.push(42);//arreglando nuevo valor al final
}let myArray = [1,2,3];
modifyArray(myArray);
//console.log(myArray); //[1,2,3,42]

let x = [1];
let y = x;

let s = "suki"

console.log(s);
//y.push(2);
//console.log(x);
//console.log(y);
const a = [1,2,3];
const b = a; //referencia a la const a

a.push(4);

console.log(a); 
console.log(b);

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
    //console.log(num);
}let originalNum = 10; //copia del valor
modifyNumber(originalNum);
//console.log(originalNum);

function valueTypes(a){
    a = 20;
    //console.log(a);
}
//let a = 10;
valueTypes(a); //referencia
//console.log(a); //valor

function referenceTypes(arr){
    arr[0] = 5; //se va referir a su valor de la memoria
    //console.log(arr);
}

const arr = [1,2,3];
referenceTypes(arr);//llamar la función, y hacer referencia
//al valor arr
//console.log(arr); //valor arr de la función