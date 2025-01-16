const usuarioRepository = require('../repositories/usuarioRepository');
class usuarioService {
    getAllUsuarios() {
        return usuarioRepository.findAll();
    }

    getUsuarioById(id) {
        return usuarioRepository.findById(id);
    }

    createUsuario(usuarioData) {
        return usuarioRepository.create(usuarioData);
    }

    updateUsuario(id, usuarioData) {
        return usuarioRepository.update(id, usuarioData);
    }

    deleteUsuario(id) {
        return usuarioRepository.delete(id);
    }
}
module.exports = new usuarioService();
