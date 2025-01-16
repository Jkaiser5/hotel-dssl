class personaRepository extends CrudRepository {
    constructor() {
        super(persona);
    }
}
module.exports=personaRepository;