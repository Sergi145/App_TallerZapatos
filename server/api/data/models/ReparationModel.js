'use strict'

const mongoose=require('mongoose')
const Schema=mongoose.Schema

const ReparationSchema=new Schema({
	title:String,
	description:String,
	date:Date,
	price:Number,
	id_client:String,
	responsable:String,
	client:{type:Schema.ObjectId,ref:'Client'},
	 product: [{
        quantity: Number,
        product: { type: Schema.ObjectId, ref: 'Product' }
    }],

})

//exportamos el modelo

module.exports=mongoose.model('Reparation',ReparationSchema)