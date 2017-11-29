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
    workshop: { type: Schema.Types.ObjectId, ref: 'Workshop' }

})

//exportamos el modelo

module.exports = mongoose.model('Client', ClientSchema)