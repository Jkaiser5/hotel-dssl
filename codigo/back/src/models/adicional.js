class adicional{
    static tablename = adicional;
    constructor (id,idCliente,idHabitacion,idProducto,cantidad,subtotal){
        this.id=id,
        this.idCliente=idCliente;
        this.idHabitacion=idHabitacion;
        this.idProducto=idProducto;
        this.cantidad=cantidad;
        this.subtotal=subtotal;

    }
}
module.exports=adicional;