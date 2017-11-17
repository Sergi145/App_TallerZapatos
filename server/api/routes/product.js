'use strict'
const express=require('express');
const ProductController=require('../controller/product')//importamos el controlador
const auth=require('../middlewares/autenticated')// importamos el middleware de auntentifiación


const api=express.Router();


api.get('/products/:page?',ProductController.getProducts)//interrogante es opcional
api.get('/product/:id',auth.ensureAuth,ProductController.getProduct)
api.post('/product',auth.ensureAuth,ProductController.saveProduct)
api.put('/product/:id',auth.ensureAuth,ProductController.updateProduct)
api.delete('/product/:id',auth.ensureAuth,ProductController.deleteProduct)



module.exports=api;