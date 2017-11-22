'use strict'
const express=require('express');
const ClientController=require('../controller/client')//importamos el controlador
const auth=require('../middlewares/autenticated')// importamos el middleware de auntentifiación

const multipart=require('connect-multiparty')//para poder subir archivos a la base de datos.ej:fotos
const md_upload=multipart({uploadDir:'./uploads/workshops'})//donde se guardaran las fotos de los talleres

const api=express.Router();

api.get('/client/:id',auth.ensureAuth,ClientController.getClient)
api.get('/clients',ClientController.getClients)//interrogante es opcional
api.post('/client',ClientController.saveClient)
api.put('/client/:id',ClientController.updateClient)
api.delete('/client/:id',ClientController.deleteClient)
api.post('/upload_imageclient/:id',[auth.ensureAuth,md_upload],ClientController.uploadImage)


module.exports=api;