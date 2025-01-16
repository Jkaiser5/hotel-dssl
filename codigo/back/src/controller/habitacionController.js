const express = require('express');
const haabitacionService = require('../services/habitacionService');
const router = express.Router();

router.get('/', async (req, res) => {
    const habitaciones = await haabitacionService.getAllhabitaciones();
res.json(habitaciones);
})


router.get('/:id', async (req, res) => {
    const habitacion = await haabitacionService.getAllhabitacionById(req.params.id);

if(habitacion){
    res.json(habitacion);

}    
else {
    res.status(404).json({message: 'habitacion not found' });
}
})

router.post('/', async (req, res) => {
    const newhabitacion = await haabitacionService.createhabitacion(req.body);
    if(newhabitacion)
    res.status(201).json(newhabitacion);  
else 
    res.status(404).json({message: 'habitacion not registred' });
})

router.put('/:id', async (req, res) => {
    const updatehabitacion = await haabitacionService.updatehabitacion(
       req.params.id,req.body);
    if(updatehabitacion)
    res.status(201).json(updatehabitacion);  
else 
    res.status(404).json({message: 'habitacion not update' });
})

router.delete('/:id', async (req, res) => {
    const deletehabitacion = await haabitacionService.deletehabitacion(req.params.id);
    if(deletehabitacion){
    res.status(204).send();  
}
else 
{
    res.status(404).json({message: 'habitacion dont delete' });
}
})

module.exports = router;