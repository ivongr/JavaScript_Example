//VARIABLES DE BLOQUE

function block(){
    const count = 5;

    for(let i = 0; i < count; i++){
        console.log(i);
    }
    console.log(i);
}
block();

if(true){
    var x = 10;
    let y = 20;
    const z = 30;
}
console.log(x);
console.log(y); //error y is not defined
console.log(z); //error y is not defined*/

for(let i = 0; i < 3; i++){
    console.log(i);
}
console.log(i); // ReferenceError: i is not defined*/

for (var j = 0; j < 3; j++){
    console.log(j);//0...2
}
console.log(j); 

//sale 5 veces 4 porque esta declarado con var (alcance global)
// el 5 veces 4 es porque recorrio el bluce 4 veces pero como es global recorrio una afuera 
//entonces tiene mayor alcance y sale del bucle
//esto hace que el bucle se recorra 4 veces
//si se cambia a let(alcance del bloque) sale 1...4
for (var i = 1; i <= 4; i++){
    setTimeout(function(){
        console.log(name);
    },0);
}