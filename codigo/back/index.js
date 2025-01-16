const express = require('express');
const helmet = require('helmet');
require('dotenv').config();
const personaController = require('./controllers/personaController')
const habitacionController = require('./controllers/habitacionController')
const usuarioController = require('./controllers/usuarioController')
const productoController = require('./controllers/productoController')
const adicionalController = require('./controllers/adicionalController')
const personalController = require('./controllers/personalController')
const reservaController = require('./controllers/reservaController')
const tipoPersonaController = require('./controllers/tipoPersonaController')
const ventaController = require('./controllers/ventaController')

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.referrerPolicy({
    policy: 'strict-origin-when-cross-origin'
}));

// Configurar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Ajusta esto a la URL de tu frontend
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  });

app.use('/api/persona', personaController);
app.use('/api/habitacion', habitacionController);
app.use('/api/usuario', usuarioController);
app.use('/api/producto', productoController);
app.use('/api/adicional', adicionalController);
app.use('/api/personal', personalController);
app.use('/api/reserva', reservaController);
app.use('/api/tipoPersona', tipoPersonaController);
app.use('/api/venta', ventaController);

const port= process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`servidor corriendo en http://localhost:${port}`)
})