const personalRepository = require('../repositories/personalRepository');
class personalService {
    getAllPersonales() {
        return personalRepository.findAll();
    }

    getPersonalById(id) {
        return personalRepository.findById(id);
    }

    createPersonal(personalData) {
        return personalRepository.create(personalData);
    }

    updatePersonal(id, personalData) {
        return personalRepository.update(id, personalData);
    }

    deletePersonal(id) {
        return personalRepository.delete(id);
    }
}
module.exports = new personalService();
