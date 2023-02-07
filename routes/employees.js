const express = require('express');
const router = express.Router();
const {getemployees,getemployee,createemployee,updatemployee,deletemployee} = require("../controllers/employees_controller")

router.get('/employees',getemployees);

router.get('/employees/:id',getemployee);
  
router.post('/employees',createemployee);

router.patch('/employees/:id',updatemployee);

router.delete('/employees/:id',deletemployee);

module.exports = router
