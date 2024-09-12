function createMultiplier(multiplier){
    //retornar una nueva función
    return function(number){
        return number * multiplier;
    };
}

/*const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));*/

function outer(){
    const message = "Hello,";

    function inner (name){
        console.log(message + name);
    }
    return inner;
}

/*let greet = outer();
greet("Alice");*/

function createCounter(){
    let count = 0;

    return function(){
        count++;
        console.log(count);
    };
}

var counter = createCounter();
counter();
counter();
counter();