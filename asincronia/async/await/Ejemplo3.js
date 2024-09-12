async function fetchData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (Math.random()< 0.5){
                resolve("Datos obtenidos con éxito");
            }else{
                reject("Error al obtener los datos");
            }
        },1000);
    });
}

async function getData(){
    try{
        const data = await fetchData();
        console.log(data);
    } catch (error){
        console.error(error);
    }
}
getData();