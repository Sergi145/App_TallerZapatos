'use strict'

const mongoose=require('mongoose')
const Schema=mongoose.Schema

const ProductSchema=new Schema({
	name:String,
	price:Number,
	cant_def:Number,
	workshop:{type:Schema.ObjectId,ref:'Workshop'}
})

//exportamos el modelo

module.exports=mongoose.model('Product',ProductSchema)