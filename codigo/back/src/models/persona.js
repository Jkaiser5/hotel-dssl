class persona{
    static tablename = 'persona';

    constructor (id,documento,nombre,apPat,apMat,direccion,telefono,idTipoPersona,idPersonal,estado){
        this.id=id;
        this.documento=documento;
        this.nombre=nombre;
        this.apPat=apPat;
        this.apMat=apMat;
        this.direccion=direccion;
        this.telefono=telefono;
        this.idTipoPersona=idTipoPersona;
        this.idPersonal=idPersonal;
        this.estado=estado;

    }
}
module.exports=persona;