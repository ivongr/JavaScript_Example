function myFunc(x){
    return function(y){
        return x + y;
    }
}

const sum = myFunc(4)(5);
console.log(sum);

