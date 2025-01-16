class productoRepository extends CrudRepository {
    constructor() {
        super(producto); 
    }
}
module.exports=productoRepository;