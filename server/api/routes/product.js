'use strict'
const express=require('express');
const ProductController=require('../controller/product')//importamos el controlador
const auth=require('../middlewares/autenticated')// importamos el middleware de auntentifiación
//auth.ensureAuth

const api=express.Router();


api.get('/products/:page?',ProductController.getProducts)//interrogante es opcional
api.get('/product/:id',auth.ensureAuth,ProductController.getProduct)
api.post('/product',ProductController.saveProduct)
api.put('/product/:id',ProductController.updateProduct)
api.delete('/product/:id',ProductController.deleteProduct)



module.exports=api;