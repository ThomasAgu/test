// productoController.js
const express = require('express');
const router = express.Router();
const stationModel = require('./stationModel');

router.get('/:id', async (req, res) => {
  const stationId = Number(req.params.id);
  try {
    const station = await stationModel.obtenerStationPorId(stationId);
    const price_per_product = await stationModel.precio_por_producto(stationId);
    const brand = await stationModel.brand(stationId)
    const precio_diferencia = await station.module.precio_por_producto_competidores(stationId)

   /*  const diferencia_de_precions = precio_diferencia.map((el) => {
      No llegue perdon
    }) */
    if (!station) {
      return res.status(404).json({ error: 'Estacion no encontrada' });
    }
    //devolver competidores
    const competitors = await stationModel.obtenerCompetidores(stationId);
    data = 
    {
      'nombre': station.nombre,
      'distance': [station.location_x, station.location_y],
      'precio_por_producto': price_per_product.map((el) =>  el.product, el.value),
      'marca':  brand.name,
      'diferenci_precio' : '',
    }
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});



module.exports = router;
