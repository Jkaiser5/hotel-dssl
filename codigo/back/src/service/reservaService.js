const reservaRepository = require('../repositories/reservaRepository');
class reservaService {
    getAllReservas() {
        return reservaRepository.findAll();
    }

    getReservaById(id) {
        return reservaRepository.findById(id);
    }

    createReserva(reservaData) {
        return reservaRepository.create(reservaData);
    }

    updateReserva(id, reservaData) {
        return reservaRepository.update(id, reservaData);
    }

    deleteReserva(id) {
        return reservaRepository.delete(id);
    }
}
module.exports = new reservaService();
