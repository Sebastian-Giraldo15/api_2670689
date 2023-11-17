const {response} = require('express')

Usuario = require('../models/usuario')

const getUsuario = async(req, res) => {
    const usuarios = await Usuario.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: usuarios
    })
}

const postUsuario = async(req, res) => {
    const datos = req.query //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const usuario = new Usuario(datos) //Instanciar el objeto
        await usuario.save()//Guardar en la base de dato  
        console.log(usuario) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}

const putUsuario = async(req, res) =>{
    const {nombre, password, rol, estado} = req.query
    try {
        const usuario = await Usuario.findOneAndUpdate({nombre: nombre},
            {password:password, rol:rol, estado:estado})
            mensaje = 'Actualizacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}

const deleteUsuario = async(req, res) =>{
    const {nombre} = req.query //Desestructurar
    try {
        const usuario = await Usuario.findOneAndDelete({nombre: nombre})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}
