'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClientSchema = new Schema({
    name: String,
    surnames: String,
    address: String,
    image: String,
    email: String,
    telephone: Number,
    reparation: [{
        quantity: Number,
        reparation: { type: Schema.ObjectId, ref: 'Reparation' }
    }],
})

//exportamos el modelo

module.exports = mongoose.model('Client', ClientSchema)