function saludar(){
    return console.log("Hola");
}

saludar();


cars = {name:"nissan",year:21}
console.log(typeof cars);


function myFunc(theObject){
    theObject.make = "Toyota";
}

const mycar = {make: "Honda", model: "Accord",
    year: 1998
};
let x, y;

x = mycar.make;// x obtiene el valor "Holanda"

myFunc(mycar);
y = mycar.make; // y obtiene el valor "Toyota" 
// (la propiedad make fue cambiada for la función)
console.log(y);

/*const square = function (number){
    return number * number; // x * x
};
let x = square(4);
console.log (x);*/

/** DECLARAR FUNCIONES **/

//función vacias
function showMessage(){
    alert ("Esto es una alerta");
}
//showMessage();

/**function example(paramater1,parameter2,...parameterN){
    //body
}*/

/****************************** */
/**variable local**/
function showMessage(){
    let message = "Hola,¡Soy JavaScript!"; //variable local
    alert (message);
}
//showMessage(); //contenido de la función
//alert (message); //Error, porque message es una variable local

/****************************** */
/**variable externa**/
let userName = "Juan";

function showMessage(){
    let message = "Hola," + userName;
    alert(message);
}
//showMessage();

//estas variables se pueden modificar dentro de la función
function showMessage(){
    userName = "Bob";//variable local,cambia a la variable externa

    let message = "Hola," + userName;
    alert(message);
}

/*alert (userName); //Juan antes de llamar la función
showMessage();
alert(userName);//Bob, variable modificada por la función*/

function showMessage(){
    let userName = "Bob";

    let message = "Hello," + userName; //Bob
    alert(message);
}
//showMessage(); //la función utiliza su propia variable local
//alert(userName);//John, la variable no accedio a la función

/************************************** */
/** Parámetros **/
//function showParameter(from, text){
   // alert(from + ":" + text);
//}
//showParameter("Ann","¡Hola!");
//showParameter("Ann","¿Cómo estás?")

/*function addNumbers(num1,num2){
    let sum = num1 + num2;
    console.log(`Sum: ${sum}`);
}


function greet(firstName)
{
    function SayHello(){
        alert("Hello" + firstName);
    }
    return SayHello();
}

greet("Steve");*/

//addNumbers(5,4);
/************************************* */
/* funciones anidadas /closure*/

function init(){
    let name = "Mozilla"; //variable local
    function displayName(){ //función interna que forma el closure
        console.log(name); //usar función padre
    }
    displayName();
}
//init();

function sayHiBye(firstName, lastName){
    function getFullName(){
        return firstName + "" + lastName;
    }
    alert("Hello," + getFullName());
    alert("Bye,"+getFullName());
}
//sayHiBye("suki","papalo");

/*function makeCounter(){
    let count = 0;
    return function(){
        return count++;
    };
}*/

//let counter = makeCounter();

/*alert(counter());
alert(counter());
alert(counter());*/

function sumar(a){
    return function(b){
        return a + b;
    }
}
 let suma5 = sumar(5);
 console.log(suma5(2));
 console.log(suma5(7));


let price =200;
let iva = 21;
function priceIva (){
 totalPrice = price+(price*iva)/100;
alert( "El total son" + totalPrice);
}

//priceIva();






