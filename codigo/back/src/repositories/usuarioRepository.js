class usuarioRepository extends CrudRepository {
    constructor() {
        super(usuario); 
    }
}
module.exports=usuarioRepository;