const express = require('express');
const tipoPersonaService = require('../services/tipoPersonaService');
const router = express.Router();

router.get('/', async (req, res) => {
    const tiposPersona = await tipoPersonaService.getAllTiposPersona();
    res.json(tiposPersona);
});

router.get('/:id', async (req, res) => {
    const tipoPersona = await tipoPersonaService.getTipoPersonaById(req.params.id);

    if (tipoPersona) {
        res.json(tipoPersona);
    } else {
        res.status(404).json({ message: 'TipoPersona not found' });
    }
});

router.post('/', async (req, res) => {
    const newTipoPersona = await tipoPersonaService.createTipoPersona(req.body);

    if (newTipoPersona) {
        res.status(201).json(newTipoPersona);
    } else {
        res.status(404).json({ message: 'TipoPersona not registered' });
    }
});

router.put('/:id', async (req, res) => {
    const updatedTipoPersona = await tipoPersonaService.updateTipoPersona(req.params.id, req.body);

    if (updatedTipoPersona) {
        res.status(200).json(updatedTipoPersona);
    } else {
        res.status(404).json({ message: 'TipoPersona not updated' });
    }
});

router.delete('/:id', async (req, res) => {
    const deletedTipoPersona = await tipoPersonaService.deleteTipoPersona(req.params.id);

    if (deletedTipoPersona) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'TipoPersona not deleted' });
    }
});

module.exports = router;
