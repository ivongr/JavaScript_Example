
const datos = [{
    id: 1,
    title: "Iron Man",
    year: 2008
}, {
    id: 2,
    title: "Spiderman: Homecoming",
    year: 2008
}, {
    id: 3,
    title: "Avengers: Endgame",
    year: 2019
}];

const getDatos = () => {
    return new Promise((resolve, reject) => {
        if (datos.length === 0) {
            reject(new Error("No existen datos"));
        }
        setTimeout(() => {
            resolve(datos); //resolve si no hay ningun error se devuelve los datos
        }, 1500);
    });
}

async function fetchingData() {

    try {
        //se puede juntar promesas
        const datossuk = await getDatos();
        //teneemos datos espera a ibtener esos datos
        console.log(datossuk);
        //mostrar esos datos
    } catch (err) {
        console.log(err.message);
    }

}
fetchingData();