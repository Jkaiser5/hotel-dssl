class habitacionRepository extends CrudRepository {
    constructor() {
        super(habitacion); 
    }
}
module.exports=habitacionRepository;