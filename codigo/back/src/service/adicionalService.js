const adicionalRepository = require('../repositories/adicionalRepository');
class adicionalService {
    getAllAdicionales() {
        return adicionalRepository.findAll();
    }

    getAdicionalById(id) {
        return adicionalRepository.findById(id);
    }

    createAdicional(adicionalData) {
        return adicionalRepository.create(adicionalData);
    }

    updateAdicional(id, adicionalData) {
        return adicionalRepository.update(id, adicionalData);
    }

    deleteAdicional(id) {
        return adicionalRepository.delete(id);
    }
}
module.exports = new adicionalService();
