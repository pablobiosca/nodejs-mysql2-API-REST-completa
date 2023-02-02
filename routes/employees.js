const express = require('express');
const router = express.Router();

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

module.exports = router
