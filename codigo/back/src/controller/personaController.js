const express = require('express');
const personaService = require('../services/personaService');
const router = express.Router();

router.get('/', async (req, res) => {
    const personas = await personaService.getAllPersonas();
    res.json(personas);
});

router.get('/:id', async (req, res) => {
    const persona = await personaService.getPersonaById(req.params.id);

    if (persona) {
        res.json(persona);
    } else {
        res.status(404).json({ message: 'Persona not found' });
    }
});

router.post('/', async (req, res) => {
    const newPersona = await personaService.createPersona(req.body);

    if (newPersona) {
        res.status(201).json(newPersona);
    } else {
        res.status(404).json({ message: 'Persona not registered' });
    }
});

router.put('/:id', async (req, res) => {
    const updatedPersona = await personaService.updatePersona(req.params.id, req.body);

    if (updatedPersona) {
        res.status(200).json(updatedPersona);
    } else {
        res.status(404).json({ message: 'Persona not updated' });
    }
});

router.delete('/:id', async (req, res) => {
    const deletedPersona = await personaService.deletePersona(req.params.id);

    if (deletedPersona) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Persona not deleted' });
    }
});

module.exports = router;

