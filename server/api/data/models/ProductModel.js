'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: String,
    price: Number,
    default_amount: Number
})

//exportamos el modelo

module.exports = mongoose.model('Product', ProductSchema)