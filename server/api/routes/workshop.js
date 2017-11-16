'use strict'
const express=require('express');
const WorkshopController=require('../controller/workshop')//importamos el controlador
const auth=require('../middlewares/autenticated')// importamos el middleware de auntentifiación

const multipart=require('connect-multiparty')//para poder subir archivos a la base de datos.ej:fotos
const md_upload=multipart({uploadDir:'./uploads/workshops'})//donde se guardaran las fotos de los talleres

const api=express.Router();

api.get('/workshop/:page?',WorkshopController.getworkshop)
api.post('/register_workshop',WorkshopController.saveworkshop)
api.post('/login',WorkshopController.loginworkshop)
api.put('/update_workshop/:id',auth.ensureAuth,WorkshopController.updateworkshop)
api.post('/upload_imageworkshop/:id',[auth.ensureAuth,md_upload],WorkshopController.uploadImage)


module.exports=api;