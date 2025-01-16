const personaRepository = require('../repositories/personaRepository');
class personaService {
    getAllPersonas() {
        return personaRepository.findAll();
    }

    getPersonaById(id) {
        return personaRepository.findById(id);
    }

    createPersona(personaData) {
        return personaRepository.create(personaData);
    }

    updatePersona(id, personaData) {
        return personaRepository.update(id, personaData);
    }

    deletePersona(id) {
        return personaRepository.delete(id);
    }
}
module.exports = new personaService();
