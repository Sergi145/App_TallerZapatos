'use strict'
const express=require('express');
const ClientController=require('../controller/client')//importamos el controlador
const auth=require('../middlewares/autenticated')// importamos el middleware de auntentifiación

const multipart=require('connect-multiparty')//para poder subir archivos a la base de datos.ej:fotos
const md_upload=multipart({uploadDir:'./uploads/workshops'})//donde se guardaran las fotos de los talleres

const api=express.Router();

api.get('/client/:id',auth.ensureAuth,ClientController.getClient)
api.get('/clients/:page?',auth.ensureAuth,ClientController.getClients)//interrogante es opcional
api.post('/client',auth.ensureAuth,ClientController.saveClient)
api.put('/client/:id',auth.ensureAuth,ClientController.updateClient)
api.delete('/client/:id',auth.ensureAuth,ClientController.deleteClient)


module.exports=api;