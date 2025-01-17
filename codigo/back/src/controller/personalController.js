const express = require('express');
const personalService = require('../services/personalService');
const router = express.Router();

router.get('/', async (req, res) => {
    const personales = await personalService.getAllPersonales();
    res.json(personales);
});

router.get('/:id', async (req, res) => {
    const personal = await personalService.getPersonalById(req.params.id);

    if (personal) {
        res.json(personal);
    } else {
        res.status(404).json({ message: 'Personal not found' });
    }
});

router.post('/', async (req, res) => {
    const newPersonal = await personalService.createPersonal(req.body);

    if (newPersonal) {
        res.status(201).json(newPersonal);
    } else {
        res.status(404).json({ message: 'Personal not registered' });
    }
});

router.put('/:id', async (req, res) => {
    const updatedPersonal = await personalService.updatePersonal(req.params.id, req.body);

    if (updatedPersonal) {
        res.status(200).json(updatedPersonal);
    } else {
        res.status(404).json({ message: 'Personal not updated' });
    }
});

router.delete('/:id', async (req, res) => {
    const deletedPersonal = await personalService.deletePersonal(req.params.id);

    if (deletedPersonal) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Personal not deleted' });
    }
});

module.exports = router;
