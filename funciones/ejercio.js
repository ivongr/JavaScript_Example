//Crea una función que tenga dos argumentos:
//num1, num2, y que devuelva como resultado la 
//suma de ambos números. Se supone que se usarán 
//solo números válidos, no letras o símbolos.

function numSum(num1,num2){
   
 if(Number.isInteger(num1,num2)){ //número entero
        let sum = num1 + num2;
        alert(sum);
    }
        alert("No es un número");
}

//numSum("No es un número","No es un número");


//Si es par o no 

function isPar(num){
    if(num %2 === 0){
        alert(true);
    }
    alert(false);
}

isPar(2);

//Sistema de facturación
//Crear una función que se llame facturacion() .
//La función tiene que recibir como parámetro el monto de un producto , y el medio de pago : C (tarjeta de crédito), E (efectivo) y D (tarjeta de débito). Si el monto del producto es menor a $200 no se aplicará ningún descuento. Si el monto a abonar es entre $200 y $400 se aplicará un descuento del 30% si el medio de pago es efectivo, 20% si se realiza con dÃ©bito y 10% con tarjeta de crédito. Para montos mayores a $400, el descuento es 40% sin importar el medio de pago.
//La función deberá retornar el monto final a abonar.

function facturacion(montoProducto,medioPago){
    if (montoProducto < 200){
return console.log("El monto a abonar es de ")
    }
}
