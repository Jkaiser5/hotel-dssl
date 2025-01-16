const habitacionRepository = require('../repositories/habitacionRepository');
class habitacionService {
    getAllHabitaciones() {
        return habitacionRepository.findAll();
    }

    getHabitacionById(id) {
        return habitacionRepository.findById(id);
    }

    createHabitacion(habitacionData) {
        return habitacionRepository.create(habitacionData);
    }

    updateHabitacion(id, habitacionData) {
        return habitacionRepository.update(id, habitacionData);
    }

    deleteHabitacion(id) {
        return habitacionRepository.delete(id);
    }
}
module.exports = new habitacionService();
