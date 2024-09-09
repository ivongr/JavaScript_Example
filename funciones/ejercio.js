

function numSum(num1, num2) {

    if (Number.isInteger(num1, num2)) { //número entero
        let sum = num1 + num2;
        // alert(sum);
    }
    //alert("No es un número");
}

//numSum("No es un número","No es un número");


//Si es par o no 

function isPar(num) {
    if (num % 2 === 0) {
        //alert(true);
    }
    // alert(false);
}

isPar(2);


function typeValues(str) {
    const value = typeof str;
    //console.log("El valor es" + value)
}

typeValues(55);

function palindrome(x) {
    let value = Array.from(x).reverse().join("");
    if (value.toLowerCase() === x.toLowerCase()) {
        console.log("es palindromo" + " " + value);
    } else {
        console.log("no es palindromo" + " " + value);
    }
}

//palindrome('');
function combinationsx(s) {
    combinations = [];
    for (let i = 0; i < s.length; i++) {
        //Letra principal 1
        let combination = s.charAt(i);
        combinations.push(combination);
        for (let j = i + 1; j < s.length; j++) {
            combination += s.charAt(j);
            // Y luego lo de la primera letra con todas las que le siguen hasta el final
            combinations.push(combination);
        }
    }

    // console.log (combinations);
}

//combinationsx("osos");

function calculateDogAge(Age) {
    let HumanAge = Age * 7;
   console.log("Tu perro tiene tantos " +
        HumanAge + "en edad humana");
}

calculateDogAge(20);
