const pool = require("../dbconnection")

const ping = async function(req, res, next) {
    let result = await pool.query("select 1+1 as result")
    res.json(result[0])
}

const index = (req, res, next) =>{
    res.send("tamo en pagina principal")
}

module.exports = {ping,index}