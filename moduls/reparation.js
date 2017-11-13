'use strict'

const mongoose=require('mongoose')
const Schema=mongoose.Schema

const ReparationSchema=new Schema({
	title:String,
	description:String,
	date:Date,
	priority:String,
	price:Number,
	responsable:String,
	user:{type:Schema.ObjectId,ref:'User'}
})

//exportamos el modelo

module.exports=mongoose.model('Reparation',ReparationSchema)