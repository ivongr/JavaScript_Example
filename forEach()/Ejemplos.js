//No devuelve ningun error
function imitarForEach(funct,elementos){
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

//console.log(numberArray);
console.log(returnValue);

    