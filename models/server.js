const express = require('express')
const  cors = require('cors')//implementar seguridad
const bodyParser = require('body-parser')//pAquete para convertir el objeto enviado desde el formulario
const { dbConection } = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuarioPath = '/usuario' //Ruta de la API
        this.routes()
        this.middLewares()
        this.conectarDB()
    }

    listen(){
        this.app.listen(
            this.port, () => {
                console.log('Escuchando por el puerto '+this.port)
            } 
        )
    }
    routes(){
        this.app.use(this.usuarioPath, require('../routes/usuario'))
    }

    middLewares(){
        this.app.use(cors()); //Indiicar el uso de cors
        this.app.use(bodyParser.json())//Parser objetos a insertar en la DB
    }

    async conectarDB(){
        await dbConection()
    }

}

module.exports = {Server} //Exportación de la clase