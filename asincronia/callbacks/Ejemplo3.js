/****Función callback */

function sumNumber(num, callback) {
    callback(num + 10);
}

/*sumNumber(10, function(value){
console.log(`El resultado es: ${value}`)
})*/

function showResult(value) {
    console.log(`El resultado es: ${value}`)
}

sumNumber(30, showResult)
