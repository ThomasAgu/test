const express = require('express');
const app = express();
const config = require('../variables_entorno');
const stationController = require('./stationController');

app.use(express.json());

app.use('/api/station', stationController);

const PORT = config.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
