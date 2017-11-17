require ('dotenv').config()

const express=require('express')

const app=express()

app.use(express.static('public'))

console.log(`starting port ${process.env.PORT}`)

app.listen(process.env.PORT)