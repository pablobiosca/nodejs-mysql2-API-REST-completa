const pool = require("../dbconnection")

const getemployees = async (req,res,next)=>{

    try{
        // throw new error ("error !!")
        const mostrar = await pool.query("select * from employee;")
        console.log(mostrar[0])
    
        res.json(mostrar[0])

    }catch (error){
        return res.status(500).json({
            message:"ooohhh"
        })
    }
}

const getemployee = async (req,res) =>{
    try{
        // throw new error ("error !!")

        console.log(req.params)
        const [rows] = await pool.query("select * from employee where id = ?",[req.params.id])
    
        if (rows.length <=0){
            return res.status(404).json({
                message:"employee not found"
            })
        }

        console.log(rows)
        res.json("usuario obtenido")

    }catch (error){
        return res.status(500).json({
            message:"ooohhh"
        })
    }
}

const createemployee = async (req,res,next) =>{

    try{
        // throw new error ("error !!")
        const {name,salary} = req.body
    
        console.log(req.body)
        const [rows] = await pool.query("INSERT INTO employee (name,salary) values (?,?)",[name,salary])
        res.json({ id:rows.insertId,name,salary })

    }catch (error){
        return res.status(500).json({
            message:"ooohhh"
        })
    }


}

const updatemployee = async (req,res,next) =>{

    try{
        // throw new error ("error !!")
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

    }catch (error){
        return res.status(500).json({
            message:"ooohhh"
        })
    }

}

const deletemployee = async (req,res,next) =>{

    try{
        // throw new error ("error !!")
        const [result] = await pool.query("delete from employee where id = ?",[req.params.id])
    
        if (result.affectedRows <=0){
            return res.status(404).json({
                message:"user not found to delete"
            })
        }
        res.sendStatus(204)
        console.log(result)
        
    }catch (error){
        return res.status(500).json({
            message:"ooohhh"
        })
    }


}

module.exports = {getemployees,getemployee,createemployee,updatemployee,deletemployee}