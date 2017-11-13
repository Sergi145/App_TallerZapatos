'use strict'
const express=require('express')
const app=express()
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port=8001;


app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

//configuramos las cabeceras http


//cargaremos las rutas
var workshop_routes=require('./routes/workshop')


//creamos una ruta base
app.use('/api',workshop_routes)



mongoose.connect('mongodb://localhost:27017/taller',(err,res) => {

    if (err) {
       console.error('error al arrancar la base de datos' + err)
    }
       console.log('conexion a la base de datos establecida')

    app.listen(port, () => {

    console.log('servidor corriendo en el puerto ' +port)
	})

})