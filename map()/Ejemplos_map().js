function imitaMap(funct, elementos){
    let result = [];
    for(let i = 0; i < elementos.length; i++){
          result.push(funct(elementos[i]));
        } 
    return result; //tiene un return
}
let result = imitaMap(function(elemento){
    var addOne = elemento + 1;
    console.log(addOne)
    return addOne
},[1,2,3,4]);
result;

//elementos arrays en una function


//2

let numberArray = [1,2,3,4,5];

let returnValue = numberArray.map
((num) => num * num);

console.log(numberArray);
console.log(returnValue);

//encandemiento de map
//puedes llamar una serie de operaciones

let numberArrayEnca = [1,2,3,4,5];

let returnValueEn = numberArray.map((num) => num * 2)
//convertir en numero a string
.map((num) => num.toString())
.map((string) => "$"+string);

console.log(numberArrayEnca);
console.log(returnValueEn);