'use strict'
const express=require('express');
const ReparationController=require('../controller/reparation')//importamos el controlador

const auth=require('../middlewares/autenticated')// importamos el middleware de auntentifiación

const api=express.Router();

api.get('/reparation/:id',auth.ensureAuth,ReparationController.getReparation)
api.get('/reparations',ReparationController.getReparations)//interrogante es opcional
api.get('/reparations/:client',ReparationController.getReparations_by_Id)
api.post('/reparation',ReparationController.saveReparation)
api.put('/reparation/:id',auth.ensureAuth,ReparationController.updateReparation)
api.delete('/reparation/:id',ReparationController.deleteReparation)


module.exports=api;