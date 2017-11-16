'use strict'

const mongoose=require('mongoose')
const Schema=mongoose.Schema

const WorkshopSchema=new Schema({
	name:String,
	email:String,
	password:String,
	image:String
})

//exportamos el modelo

module.exports=mongoose.model('Workshop',WorkshopSchema)