class venta {
    static tableName = 'venta';
    constructor(idVenta, idReserva, idAdicional, SubTotal, precioTotal) {
        this.idVenta = idVenta;
        this.idReserva = idReserva;
        this.idAdicional = idAdicional;
        this.SubTotal = SubTotal;
        this.precioTotal = precioTotal;
    }
}
module.exports=venta;