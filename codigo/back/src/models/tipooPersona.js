class tipoPersona {
    static tableName = 'tipoPersona';
    constructor(idTipoPersona, nombre) {
        this.idTipoPersona = idTipoPersona;
        this.nombre = nombre;
    }
}
module.exports=tipoPersona;