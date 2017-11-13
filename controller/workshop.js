'use strict'
const bcrypt = require('bcrypt-nodejs') // importamos el tema de encriptación de contraseñas
const Workshop = require('../moduls/workshop') //importamos el modelo de workshop
const jwt = require('../services/jwt') //importamos el servicio jwt 

function getworkshop(req,res) {

      res.status(404).send({ message: 'Hola que tal' })

}

function saveworkshop(req, res) {

    let workshop = new Workshop() //creamos una instancia de taller,para poder dar valores o setear los valores

    let params = req.body //recogemos todas las variables que vienen por post

    console.log(params)

    workshop.name = params.name
    workshop.email = params.email
    workshop.password = params.password
    workshop.image = 'null'

    if (params.password) {
        //encriptar contraseña y guardar los datos
        bcrypt.hash(params.password, null, null, (err, hash) => {

            workshop.password = hash

            if (workshop.name != null && workshop.email != null) { //comprobamos que tambien nos llegue los valores de name y email

                workshop.save((err, workshopStored) => { //guardamos el taller

                    if (err)
                        res.status(500).send({ message: 'Error al guardar el taller' })

                    else {

                        if (!workshopStored) //si no lo a guardado
                            res.status(404).send({ message: 'No se a registrado el taller' })
                        else
                            res.status(200).send({ workshop: workshopStored })
                    }
                })
            } else {
                res.status(200).send({ message: 'Introduce todos los campos' })
            }
        })
    } else {
        res.status(200).send({ message: 'Introduce la contraseña' })
    }
    
}

function loginworkshop(req, res) {

    var params = req.body //recogemos todas las variables que vienen por post

    var email = params.email
    var password = params.password

    Workshop.findOne({ email:email.toLowerCase()}, (err, workshop) => { //buscamos el email sea igual al email

        if (err) {
            res.status(500).send({ message: 'Error en la peticion' })
        } else {
            if (!workshop) { //si no existe el taller

                res.status(404).send({ message: 'El taller no existe' })
            } else { //si exsite el taller comprobamos la contraseña

                bcrypt.compare(password, workshop.password, (err, check) => { //comparamos la contraseña que nos llega por post con la que tenemos guardado en el objeto de la base de datos

                    if (check) { //si el check es correcto devolvemos los datos del taller logueado
                        if (params.gethash) {//devolvemos un token de jwt que lo tenemos en servicios

                              res.status(200).send({token:jwt.createToken(workshop)})

                        } else {

                            res.status(200).send({workshop})
                        }
                    } 
                    else {
                        res.status(404).send({ message: 'Imposible el logueo' })
                    }

                })

            }
        }

    })
}

function updateworkshop(req,res){

    var workshopId=req.params.id;//recogemos el id
    var update=req.body;//recogemos todo los datos del body que llega por put

    Workshop.findByIdAndUpdate(workshopId,update,{new:true},(err,workshopUpdate)=>{

         if (err) {
            res.status(500).send({ message: 'Error al actualizar el taller' })
        }
        else{
             if (!workshopUpdate) { //si no existe el taller

                res.status(404).send({ message: 'No se a podido actualizar el taller' })
            }
            else{

                 res.status(200).send({ workshop:workshopUpdate})
            }

        }
    })
}

module.exports = {
    getworkshop,
    saveworkshop,
    loginworkshop,
    updateworkshop
}