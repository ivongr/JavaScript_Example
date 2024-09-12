function outerFunction(x){
function innerFunc1(y){
    function innerFunc2(z){
        return x + y + z;
    }
    return innerFunc2;
}
return innerFunc1;
}

const sum = outerFunction (4)(5)(2)
console.log(sum);