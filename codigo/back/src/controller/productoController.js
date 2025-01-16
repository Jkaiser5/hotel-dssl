const express = require('express');
const productoService = require('../services/productoService');
const router = express.Router();

router.get('/', async (req, res) => {
    const productos = await productoService.getAllProductos();
    res.json(productos);
});

router.get('/:id', async (req, res) => {
    const producto = await productoService.getProductoById(req.params.id);

    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ message: 'Producto not found' });
    }
});

router.post('/', async (req, res) => {
    const newProducto = await productoService.createProducto(req.body);

    if (newProducto) {
        res.status(201).json(newProducto);
    } else {
        res.status(404).json({ message: 'Producto not registered' });
    }
});

router.put('/:id', async (req, res) => {
    const updatedProducto = await productoService.updateProducto(req.params.id, req.body);

    if (updatedProducto) {
        res.status(200).json(updatedProducto);
    } else {
        res.status(404).json({ message: 'Producto not updated' });
    }
});

router.delete('/:id', async (req, res) => {
    const deletedProducto = await productoService.deleteProducto(req.params.id);

    if (deletedProducto) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Producto not deleted' });
    }
});

module.exports = router;
