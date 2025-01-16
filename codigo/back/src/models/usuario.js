class usuario {
    static tableName = 'usuario';
    constructor(idUsuario, username, password, idPersona) {
        this.idUsuario = idUsuario;
        this.username = username;
        this.password = password;
        this.idPersona = idPersona;
    }
}
module.exports=usuario;