const pool = require("../dbconnection")

const getemployees = async (req,res,next)=>{

    const mostrar = await pool.query("select * from employee;")

    console.log(mostrar[0])

    res.json(mostrar[0])
}

const getemployee = async (req,res) =>{
    console.log(req.params)
    const [rows] = await pool.query("select * from employee where id = ?",[req.params.id])

    if (rows.length <=0){
        return res.status(404).json({
            message:"employee not found"
        })
    }

    console.log(rows)
    res.json("usuario obtenido")
}

const createemployee = async (req,res,next) =>{

    const {name,salary} = req.body

    console.log(req.body)
    const [rows] = await pool.query("INSERT INTO employee (name,salary) values (?,?)",[name,salary])
    res.json({ id:rows.insertId,name,salary })
}

const updatemployee = async (req,res,next) =>{
    const {id} = req.params
    const {name,salary} = req.body
    console.log(id,name,salary)
    const [result] = await pool.query("update employee set name=ifnull(?,name),salary=ifnull(?,salary) where id=?",[name,salary,id])
    
    if (result.affectedRows <=0){
        return res.status(404).json({
            message:"user not found to update"
        })
    }
    
    console.log(result)
    res.json("recieved")
}

const deletemployee = async (req,res,next) =>{
    const [result] = await pool.query("delete from employee where id = ?",[req.params.id])

    if (result.affectedRows <=0){
        return res.status(404).json({
            message:"user not found to delete"
        })
    }
    res.sendStatus(204)
    console.log(result)
}

module.exports = {getemployees,getemployee,createemployee,updatemployee,deletemployee}