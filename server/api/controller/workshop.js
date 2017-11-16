'use strict'
const bcrypt = require('bcrypt-nodejs') // importamos el tema de encriptación de contraseñas
const Workshop = require('../moduls/workshop') //importamos el modelo de workshop
const jwt = require('../services/jwt') //importamos el servicio jwt 

function getworkshop(req,res) {

    if(req.params.page){

        var page=req.params.page;//como vamos a utilizar paginamiento creamos una variable page
    }
    else{
        var page=1;
    }
    
    var workshopPerPage=8;//le decimos cada pagina cuantos clientes listara

    Workshop.find().sort('name').paginate(page,workshopPerPage,(err,workshops,total)=>{//buscamos los clientes y lo ordenamos por nombre

        if(err){

             res.status(500).send({ message: 'Error en la petición' })
        }
        else{

            if(!workshops){

                res.status(404).send({ message: 'No hay talleres' })

            }
            else{
                
                res.status(200).send({
                    total_workshop:total,
                    workshops:workshops
                })
            }

        }

    })

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


function uploadImage(req,res){

      var workshopId=req.params.id;//recogemos el id

      var file_name='Imagen no subida';

       //console.log(req.files)

      if(req.files){
        var file_path=req.files.image.path;//path donde esta guardada la imagen
        var file_split=file_path.split('\\');//recortarmos el nombre
        var file_name=file_split[2];
        //console.log(file_split);

        var ext_split=file_name.split('\.')
        var file_ext=ext_split[1];//encontramos la extension de la foto
        console.log(file_ext);

        if(file_ext==='png' || file_ext==='jpg' || file_ext==='gif'){

                Workshop.findByIdAndUpdate(workshopId,{image:file_name},(err,workshopUpdate)=>{//guardamos la foto

                if (!workshopUpdate) { //si no existe el taller

                res.status(404).send({ message: 'No se a podido actualizar el taller' })
            }
            else{

                 res.status(200).send({ workshop:workshopUpdate})
            }

                })
        }
        else{
             res.status(404).send({ message: 'Extension del archivo no valida' })
        }

      }
      else{
          res.status(404).send({ message: 'No has subido ninguna imagen' })
      }

}

module.exports = {
    getworkshop,
    saveworkshop,
    loginworkshop,
    updateworkshop,
    uploadImage
}