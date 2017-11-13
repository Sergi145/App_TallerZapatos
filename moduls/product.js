'use strict'

const mongoose=require('mongoose')
const Schema=mongoose.Schema

const ProductSchema=new Schema({
	name:String,
	picture:String,
	price:{type:Number,default:0},
	category:{type:String, enum:['shoes_men','shoes_women','shoes_kids']},
	description:String,
	workshop:{type:Schema.ObjectId,ref:'Workshop'}
})

//exportamos el modelo

module.exports=mongoose.model('Product',ProductSchema)