const express = require('express');
const ventaService = require('../services/ventaService');
const router = express.Router();

router.get('/', async (req, res) => {
    const ventas = await ventaService.getAllVentas();
    res.json(ventas);
});

router.get('/:id', async (req, res) => {
    const venta = await ventaService.getVentaById(req.params.id);

    if (venta) {
        res.json(venta);
    } else {
        res.status(404).json({ message: 'Venta not found' });
    }
});

router.post('/', async (req, res) => {
    const newVenta = await ventaService.createVenta(req.body);

    if (newVenta) {
        res.status(201).json(newVenta);
    } else {
        res.status(404).json({ message: 'Venta not registered' });
    }
});

router.put('/:id', async (req, res) => {
    const updatedVenta = await ventaService.updateVenta(req.params.id, req.body);

    if (updatedVenta) {
        res.status(200).json(updatedVenta);
    } else {
        res.status(404).json({ message: 'Venta not updated' });
    }
});

router.delete('/:id', async (req, res) => {
    const deletedVenta = await ventaService.deleteVenta(req.params.id);

    if (deletedVenta) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Venta not deleted' });
    }
});

module.exports = router;
