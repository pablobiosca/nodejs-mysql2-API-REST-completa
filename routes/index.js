const express = require('express');
const router = express.Router();

// const employees = require("./employees")
const {ping,index} = require("../controllers/index_controller")

/* GET home page. */
router.get('/', index);

router.get('/ping', ping);


// router.use(employees)

module.exports = router;
