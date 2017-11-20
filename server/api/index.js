'use strict'
require('dotenv').config()
const express=require('express')

const app=express()
var mongoose = require('mongoose');
const cors=require('cors') 
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended:false }))

app.use(bodyParser.json())

//configuramos las cabeceras http

app.use(cors())

//cargaremos las rutas
var workshop_routes=require('./routes/workshop')
var client_routes=require('./routes/client')
var product_routes=require('./routes/product')
var reparation_routes=require('./routes/reparation')


//creamos una ruta base
app.use('/api',workshop_routes)
app.use('/api',client_routes)
app.use('/api',product_routes)
app.use('/api',reparation_routes)


mongodb://sergi145: asda@ds255455.mlab.com:55455/sergipicazo
mongoose.connect(process.env.DB_URL,(err,res) => {

    if (err) {
       console.error('error al arrancar la base de datos' + err)
    }
       console.log('conexion a la base de datos establecida')

    app.listen(process.env.PORT, () => {

    console.log('servidor corriendo en el puerto ' +process.env.PORT)
	})

})