const express = require('express');
const router = express.Router();
const pool = require("../dbconnection")
const employees = require("./employees")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hola")
});

router.get('/ping', async function(req, res, next) {
  let result = await pool.query("select 1+1 as result")
  res.json(result)
});

router.use(employees)

module.exports = router;
