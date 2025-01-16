const ventaRepository = require('../repositories/ventaRepository');

class ventaService {
    getAllVentas() {
        return ventaRepository.findAll();
    }

    getVentaById(id) {
        return ventaRepository.findById(id);
    }

    createVenta(ventaData) {
        return ventaRepository.create(ventaData);
    }

    updateVenta(id, ventaData) {
        return ventaRepository.update(id, ventaData);
    }

    deleteVenta(id) {
        return ventaRepository.delete(id);
    }
}

module.exports = new ventaService();
