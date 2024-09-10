class Factura{
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


     calcularDiferencia(factura1,factura2){
       return factura1.total - 
        factura2.total;
    }

}

export {Factura};