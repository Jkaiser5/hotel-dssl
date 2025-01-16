class personalRepository extends CrudRepository {
    constructor() {
        super(personal);
    }
}
module.exports=personalRepository;
