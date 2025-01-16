const tipoPersonaRepository = require('../repositories/tipoPersonaRepository');
class tipoPersonaService {
    getAllTiposPersona() {
        return tipoPersonaRepository.findAll();
    }

    getTipoPersonaById(id) {
        return tipoPersonaRepository.findById(id);
    }

    createTipoPersona(tipoPersonaData) {
        return tipoPersonaRepository.create(tipoPersonaData);
    }

    updateTipoPersona(id, tipoPersonaData) {
        return tipoPersonaRepository.update(id, tipoPersonaData);
    }

    deleteTipoPersona(id) {
        return tipoPersonaRepository.delete(id);
    }
}
module.exports = new tipoPersonaService();
