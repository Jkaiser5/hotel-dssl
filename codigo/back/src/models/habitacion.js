class habitacion{
    static tablename=habitacion;
    constructor(id,tipoHabitacion,descripcion,pDiario,estado){
        this.id=id;
        this.tipoHabitacion=tipoHabitacion;
        this.descripcion=descripcion;
        this.pDiario=pDiario;
        this.estado=estado;

    }
}
module.exports=habitacion;