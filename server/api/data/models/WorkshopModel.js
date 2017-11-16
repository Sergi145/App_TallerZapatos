'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WorkshopSchema = new Schema({
    name: String,
    email: String,
    password: String,
    image: String,
    products: [{
        quantity: Number,
        product: { type: Schema.ObjectId, ref: 'Product' }
    }],
    clients: [{
        client: { type: Schema.ObjectId, ref: 'Client' }
    }]
})

//exportamos el modelo

module.exports = mongoose.model('Workshop', WorkshopSchema)