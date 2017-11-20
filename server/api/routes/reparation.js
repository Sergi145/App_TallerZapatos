'use strict'
const express=require('express');
const ReparationController=require('../controller/reparation')//importamos el controlador

const auth=require('../middlewares/autenticated')// importamos el middleware de auntentifiación

const api=express.Router();

api.get('/reparation/:id',auth.ensureAuth,ReparationController.getReparation)
api.get('/reparations/:page?',ReparationController.getReparations)//interrogante es opcional
api.post('/reparation',auth.ensureAuth,ReparationController.saveReparation)
api.put('/reparation/:id',auth.ensureAuth,ReparationController.updateReparation)
api.delete('/reparation/:id',auth.ensureAuth,ReparationController.deleteReparation)


module.exports=api;