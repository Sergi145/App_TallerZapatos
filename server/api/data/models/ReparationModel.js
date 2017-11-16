'use strict'

const mongoose=require('mongoose')
const Schema=mongoose.Schema

const ReparationSchema=new Schema({
	title:String,
	description:String,
	date:Date,
	category:{type:String, enum:['terminada','en_proceso']},
	price:Number,
	responsable:String,
	workforce:Number,
	client:{type:Schema.ObjectId,ref:'Client'}
	
})

//exportamos el modelo

module.exports=mongoose.model('Reparation',ReparationSchema)