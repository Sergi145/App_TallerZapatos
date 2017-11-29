'use strict'

const path = require('path');
const fs = require('fs');
const mongoosePaginate=require('mongoose-pagination')//como vamos a utilizar paginación importamos el mongoosepagination
const Client = require('../data/models/ClientModel')
const Reparation = require('../data/models/ReparationModel')
const Workshop = require('../data/models/WorkshopModel')
//const Product = require('../moduls/product')

function getClient(req, res) {

	var clientId=req.params.id;

	Client.findById(clientId).populate({path:'reparation'}).exec((err,client)=>{

		if(err){

			 res.status(500).send({ message: 'Error en la petición' })

		}
		else{
			if(!client){

				res.status(404).send({ message: 'El cliente no existe' })

			}
			else{
				res.status(200).send({client})
			}
		}
	})

}


function getClients(req,res){

	if(req.params.page){

		var page=req.params.page;//como vamos a utilizar paginamiento creamos una variable page
	}
	else{
		var page=1;
	}
	
	var clientsPerPage=10;//le decimos cada pagina cuantos clientes listara

	Client.find().sort('name').paginate(page,clientsPerPage,(err,clients,total)=>{//buscamos los clientes y lo ordenamos por nombre

		if(err){

			 res.status(500).send({ message: 'Error en la petición' })
		}
		else{

			if(!clients){

				res.status(404).send({ message: 'No hay clientes' })

			}
			else{
				
				return res.status(200).send({
					total_clients:total,
					clients:clients
				})
			}

		}

	})

}


function saveClient(req, res) {

    let client = new Client() //creamos una instancia de cliente,para poder dar valores o setear los valores


    let params = req.body //recogemos todas las variables que vienen por post

    console.log(params)

    client.name = params.name
    client.surnames = params.surnames
    client.address = params.address
    client.image = 'null'
    client.email = params.email
    client.telephone = params.telephone
    client.reparation=params.reparation


    client.save((err, clientStored) => {

        if (err)
            res.status(500).send({ message: 'Error al guardar el cliente' })

        else {

            if (!clientStored) //si no lo a guardado
                res.status(404).send({ message: 'No se a registrado el cliente' })
            else
                res.status(200).send({ client: clientStored })
        }
  
})

}


function updateClient(req,res){

	var clientId=req.params.id;//conseguimos el id que nos llega por params

	var update=req.body;//recogemos todo los datos del body que llega por put

	Client.findByIdAndUpdate(clientId,update,{new:true},(err,clientUpdated)=>{

		 if (err) {
            res.status(500).send({ message: 'Error al actualizar el cliente' })
        }
        else{
             if (!clientUpdated) { //si no existe el taller

                res.status(404).send({ message: 'No se a podido actualizar el cliente' })
            }
            else{

                 res.status(200).send({ client:clientUpdated})
            }

        }


	})

}


function deleteClient(req,res){

	var clientId=req.params.id;//conseguimos el id que nos llega por params

	Client.findByIdAndRemove(clientId,(err,clientDelete)=>{

		 if (err) {
            res.status(500).send({ message: 'Error al borrar el cliente' })
        }
        else{
             if (!clientDelete) { //si no existe el taller

                res.status(404).send({ message: 'No se a podido borrar el cliente' })
            }
            else{

                 //res.status(200).send({clientDelete})
                 //ahora hacemos que tambien borre todas las tareas del cliente que estaban relacionadas con el

                 Reparation.find({client:clientDelete.id}).remove((err,reparationDelete)=>{

                 	if(err){
                 		 res.status(500).send({ message: 'Error al borrar la reparacion' })
                 	}
                 	else{

                 		if(!reparationDelete){

                 			 res.status(404).send({ message: 'No se a podido borrar la reparación' })
                 		}
                 		else{

                 			res.status(200).send({reparationDelete})

                 		}
                 	}

                 })
            }
        }
	})
}


function uploadImage(req,res){

      var clientId=req.params.id;//recogemos el id

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

                Client.findByIdAndUpdate(clientId,{image:file_name},(err,clientUpdate)=>{//guardamos la foto

                if (!clientUpdate) { //si no existe el taller

                res.status(404).send({ message: 'No se a podido actualizar el cliente' })
            }
            else{

                 res.status(200).send({ client:clientUpdate})
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
    getClient,
    saveClient,
    getClients,
    updateClient,
    deleteClient,
    uploadImage
}