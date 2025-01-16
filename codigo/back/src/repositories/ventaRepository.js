class ventaRepository extends CrudRepository {
    constructor() {
        super(venta); // Usa el modelo Usuario
    }
}
module.exports=ventaRepository;