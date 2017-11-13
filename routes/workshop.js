'use strict'
const express=require('express');
const WorkshopController=require('../controller/workshop')//importamos el controlador
const auth=require('../middlewares/autenticated')// importamos el middleware de auntentifiación

const multipart=require('connect-multiparty')//para poder subir archivos a la base de datos.ej:fotos

const api=express.Router();

api.get('/workshop',auth.ensureAuth,WorkshopController.getworkshop)
api.post('/register_workshop',WorkshopController.saveworkshop)
api.post('/login',WorkshopController.loginworkshop)
api.put('/update_workshop/:id',auth.ensureAuth,WorkshopController.updateworkshop)


module.exports=api;