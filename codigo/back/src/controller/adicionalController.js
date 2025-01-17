const express = require('express');
const adicionalService = require('../services/adicionalService');
const router = express.Router();

router.get('/', async (req, res) => {
    const adicionales = await adicionalService.getAllAdicionales();
    res.json(adicionales);
});

router.get('/:id', async (req, res) => {
    const adicional = await adicionalService.getAdicionalById(req.params.id);

    if (adicional) {
        res.json(adicional);
    } else {
        res.status(404).json({ message: 'Adicional not found' });
    }
});

router.post('/', async (req, res) => {
    const newAdicional = await adicionalService.createAdicional(req.body);

    if (newAdicional) {
        res.status(201).json(newAdicional);
    } else {
        res.status(404).json({ message: 'Adicional not registered' });
    }
});

router.put('/:id', async (req, res) => {
    const updatedAdicional = await adicionalService.updateAdicional(req.params.id, req.body);

    if (updatedAdicional) {
        res.status(200).json(updatedAdicional);
    } else {
        res.status(404).json({ message: 'Adicional not updated' });
    }
});

router.delete('/:id', async (req, res) => {
    const deletedAdicional = await adicionalService.deleteAdicional(req.params.id);

    if (deletedAdicional) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Adicional not deleted' });
    }
});

module.exports = router;
