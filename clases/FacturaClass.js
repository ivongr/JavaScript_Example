class Factura {
    constructor(numero,cliente,divisa,subtotal,IVA){
       this.numero = numero;
       this.cliente = cliente;
       this.divisa = divisa;
       this.subtotal = subtotal;
       this.IVA = IVA; 
    }

    get total(){
        return this.subtotal + this.IVA;
    }

    /*método set permiten tranferir valores específicos */
    set nuevaDivisa(valor){
        this.divisa = valor;
    }

    static calcularDiferencia(factura1,factura2){
        return factura1.total - factura2.total;
    }
}

/*const factura = new Factura(201,"ADO.SOLIT","usd",23,234)
factura.nuevaDivisa = "mxn";
console.log("Factura no." + factura.numero + "por el cliente" + factura.cliente
   + "con la divisa" + factura.divisa
)*/

const factura1 = new Factura(201,"ADO.SOLIT","usd",5,54);
const factura2 = new Factura(201,"Elite","usd",23,24);

console.log("La diferencia de factura es" + Factura. calcularDiferencia(factura1,factura2));



