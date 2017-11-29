'use strict'

const mongoose=require('mongoose')
const Schema=mongoose.Schema

const ReparationSchema=new Schema({
	title:String,
	description:String,
	date1:Date.parse(),
	price:Number,
	responsable:String,
	client:{type:Schema.ObjectId,ref:'Client'}

})

//exportamos el modelo

module.exports=mongoose.model('Reparation',ReparationSchema)