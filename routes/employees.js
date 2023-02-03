const express = require('express');
const router = express.Router();
const {getemployees,createemployee,updatemployee,deletemployee} = require("../controllers/employees_controller")

router.get('/employees',getemployees);
  
router.post('/employees',createemployee);

router.put('/employees',updatemployee);

router.delete('/employees',deletemployee);

module.exports = router
