var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routerPuntuacion = require('./routers/puntuacion')
var routerUsuario = require('./routers/usuario')
var morgan = require('morgan')
var cors = require('cors')
var dotenv = require('dotenv')

var app = express();

dotenv.config();

// Preparo body parser para que transforme las peticiones de texto a json
app.use( bodyParser.urlencoded( {extended:false}) )
app.use( bodyParser.json() )

app.use( cors() )
app.use( morgan('dev') )
app.use('/puntuacion', routerPuntuacion)
app.use('/usuario', routerUsuario)

const run = async() => {
    await mongoose.connect(process.env.URL_BASEDATOS, {useFindAndModify:true, useNewUrlParser: true, useUnifiedTopology: true} )
    await app.listen(process.env.PUERTO_SERVIDOR)
    console.log("Servidor y base de datos arrancados")
}
run().catch(err => console.error('Fallo al arrancar:'+err))