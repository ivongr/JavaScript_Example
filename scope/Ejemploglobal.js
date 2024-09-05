///GLOBAL SCOPE (variables globales)

var variableGlobal = "esto es una varibale global";
console.log(window.variableGlobal);

var variable = "esto es una variable";

function imprime(){
   console.log(`${variable}llamada dentro de una función`);  
};

imprime();
console.log(`${variable} llamada fuera de una función`);


function variables (){
    variableGlobal = "Esto es una variable global"
}

variables();

console.log(variableGlobal);

function variablexs(){
    var variableLocal = variableGlobal = "Variable Global";
}
variablexs();
console.log(variableGlobal);


let firstName = "Pepa" //variable global 
function greet(){
    console.log("Hola," + firstName); //acceder a variable global
}
greet(); 
console.log(firstName); //llamar/acceder a variable global

palo= 5;
console.log(palo);
