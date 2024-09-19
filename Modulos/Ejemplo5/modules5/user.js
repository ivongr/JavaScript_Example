let usersjson = '{"name" : "Sandra Lopez","age" : 25,"address":{ "city" : "Xalapa","state" : "Ver", "zip" : 2545},"email" : "sandra@gmail.com","password" :"s123andr@"}';


const listUsers = () => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve (JSON.parse(usersjson)); //resolve si no hay ningun error se devuelve los datos
       
        },1000);
    });
}

export {listUsers};