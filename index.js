const db = require('./config/database');
require('dotenv').config();


const express = require('express');
const cors = require('cors');


const app = express();

//CORS
app.use(cors({
    origin: ['http://127.0.0.1:5500'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders:['COontent-Type', 'Authorization']
}))

//rutas
const getTablas = require('./routers/get/obtenerTablas');
app.use(getTablas);

const getTareas = require('./routers/get/obtenerTareas');
app.use(getTareas);




//configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Servidor: http://localhost:${PORT}`);
})
