let usersjson = '{"name" : "Sandra Lopez","age" : 25,"address":{ "city" : "Xalapa","state" : "Ver", "zip" : 2545},"email" : "sandra@gmail.com","password" :"s123andr@"}';

//console.log(typeof usersjson)
    let user = JSON.parse(usersjson);

/*console.log(typeof user)*/

/*var jsonTexto = '{"color":"blanco","km":100000,"esNuevo":false,"rueda":{"marca":"desconocida","estado":"malo"}}';
var coche = JSON.parse(jsonTexto);
console.log(coche);


console.log(typeof coche)*/

const getUsers = () => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve (user); //resolve si no hay ningun error se devuelve los datos
        },10);
    });
}


//se puede juntar promesas
getUsers().then((user) => console.log(user)); //devuelven los datos

