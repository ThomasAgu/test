// productoModel.js
const db = require('./db');

async function obtenerStationPorId(id) {
  try {
    const [rows] = await db.execute(`SELECT * FROM stations WHERE cre_id = ${id}`);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

async function obtenerCompetidores(id) {
  try{
    const [rows] = await db.execute(`SELECT * FROM stations_competitors WHERE cre_id_competitor = ${id}`);
    return rows[0];
  } catch(error) {
    throw error;
  }
}


async function obtenerBrand(id) {
  try{
    const [rows] = await db.execute(`SELECT id FROM stations_brands WHERE cre_id = ${id}`);
    return rows[0]
  } catch(error) {
    throw error;
  }
}

async function brand(id) {
  try{
    const brand = obtenerBrand(id);
    const [rows] = await db.execute(`SELECT name FROM brands WHERE id = ${brand.id}`);
    return rows[0];
  } catch(error) {
    throw error;
  }
}

async function precio_por_producto(id) {
  try{
    const [rows] = await db.execute(`SELECT * prices WHERE cre_id = ${id}`);
    return rows[0];
  } catch(error) {
    throw error;
  }
}


async function precio_por_producto_competidores(id) {
  try{
    const [rows] = await db.execute(`SELECT * prices WHERE cre_id != ${id}`);
    return rows[0];
  } catch(error) {
    throw error;
  }
}



module.exports = {
  obtenerStationPorId,
  obtenerCompetidores,
  precio_por_producto,
  brand,
};
