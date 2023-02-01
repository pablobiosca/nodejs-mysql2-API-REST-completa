const {createPool} = require("mysql2/promise")

const pool = createPool({
    host:"localhost",
    port:3306,
    user:"root",
    database:"companydb",
    password:"1234"
})


module.exports = pool
