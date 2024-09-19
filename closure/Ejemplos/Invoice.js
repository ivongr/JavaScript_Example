function Invoice(numberInv) {
    this.number = numberInv;
    let count = 0;
    let subtotal = 0;
    let iva = 0.16;
    let total = 0;
    let tax = 0;
    return {
        getInvoice: function () {
            this.calcularTotal();
            this.totalTax();
            return `Info factura
            No.Factura: ${numberInv}
            Total con impuesto: $${total} 
            Impuesto: $${tax}
            Total de productos: ${count}`;
        },
        addProduct: function (precio) {
            subtotal += precio;
            count++;
            return subtotal;
        },

        totalTax: function () {
            tax = subtotal * iva;
            return tax;
        },

        calcularTotal: function () {

            total = subtotal + (subtotal * iva);

            return total;
        },
    };

}

const producto = new Invoice(5);

producto.addProduct(5);
console.log(producto.getInvoice());
producto.addProduct(80);
console.log(producto.getInvoice());