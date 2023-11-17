const {Schema, model} = require('mongoose')//Crear una coleccion o acceder a colecciones en mongo 

const UsuarioSchema = ({
    nombre:{
        type: String,
        unique:true,
        required:[true, 'El nombre de usuario es requerido']
    },

    password:{
        type:String,
        required:[true, 'El password es requerido'],
        min:[4, 'El password debe contener minimo 4 caracteres'],
        max:[10, 'El password debe contener maximo 10 caracteres'],
    },

    rol: {
        type:String,
        required:[true, 'El rol es requerido'],
        enum:['Admin', 'Usuario'],
    },

    estado: {
        type:Boolean,
        default:true
    }
})


module.exports = model('Usuario', UsuarioSchema)
