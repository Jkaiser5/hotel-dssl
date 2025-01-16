class reserva {
    static tableName = 'reserva';
    constructor(idReserva, idUsuario, idPersona, idHabitacion, fIngreso, fSalida, fReserva, dias) {
        this.idReserva = idReserva;
        this.idUsuario = idUsuario;
        this.idPersona = idPersona;
        this.idHabitacion = idHabitacion;
        this.fIngreso = fIngreso;
        this.fSalida = fSalida;
        this.fReserva = fReserva;
        this.dias = dias;
    }
}
module.exports=reserva;