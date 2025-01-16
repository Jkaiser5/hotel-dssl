const express = require('express');
const reservaService = require('../services/reservaService');
const router = express.Router();

router.get('/', async (req, res) => {
    const reservas = await reservaService.getAllReservas();
    res.json(reservas);
});

router.get('/:id', async (req, res) => {
    const reserva = await reservaService.getReservaById(req.params.id);

    if (reserva) {
        res.json(reserva);
    } else {
        res.status(404).json({ message: 'Reserva not found' });
    }
});

router.post('/', async (req, res) => {
    const newReserva = await reservaService.createReserva(req.body);

    if (newReserva) {
        res.status(201).json(newReserva);
    } else {
        res.status(404).json({ message: 'Reserva not registered' });
    }
});

router.put('/:id', async (req, res) => {
    const updatedReserva = await reservaService.updateReserva(req.params.id, req.body);

    if (updatedReserva) {
        res.status(200).json(updatedReserva);
    } else {
        res.status(404).json({ message: 'Reserva not updated' });
    }
});

router.delete('/:id', async (req, res) => {
    const deletedReserva = await reservaService.deleteReserva(req.params.id);

    if (deletedReserva) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Reserva not deleted' });
    }
});

module.exports = router;
