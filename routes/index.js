const express = require('express');
const router = express.Router();

const pool = require("../dbconnection")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hola")
});

router.get('/ping', async function(req, res, next) {
  let result = await pool.query("select 1+1 as result")
  res.json(result)
});

router.get('/employees', function(req, res, next) {
  res.send("obteniendo empleados")
});

router.post('/employees', function(req, res, next) {
  res.send("creando empleados")
});

router.put('/employees', function(req, res, next) {
  res.send("actualizando empleado")
});

router.delete('/employees', function(req, res, next) {
  res.send("eliminando empleados")
});


module.exports = router;
