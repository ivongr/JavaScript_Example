function ejemploConst(){
    const z = 30;
    //z = 40;
    console.log(z);
}
ejemploConst();

/*const saludar = "dice Hola";
saludar = "dice Hola tambien"*/

/*const saludar = "dice Hola";
const saludar = "dice Hola tambien";*/

const saludar = {
    mensaje: "dice Hola",
    tiempos: 4
}
console.log(saludar);

/*saludar = {
    palabras: "Hola",
    numero: "cinco"
}*/
saludar.mensaje = "dice Hola también";
