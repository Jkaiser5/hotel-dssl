class reservaRepository extends CrudRepository {
    constructor() {
        super(reserva); 
    }
}
module.exports=reservaRepository;