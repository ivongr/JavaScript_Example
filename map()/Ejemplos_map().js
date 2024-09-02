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