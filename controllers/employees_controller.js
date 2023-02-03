const getemployees = (req,res,next)=>{
    res.send("obteniendo employess")
}

const createemployee = (req,res,next) =>{
    res.send("creando empleado...")
}

const updatemployee = (req,res,next) =>{
    res.send("actualizando empleado...")
}

const deletemployee = (req,res,next) =>{
    res.send("eliminando empleado...")
}

module.exports = {getemployees,createemployee,updatemployee,deletemployee}