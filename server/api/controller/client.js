'use strict'

const path = require('path');
const fs = require('fs');
const mongoosePaginate=require('mongoose-pagination')//como vamos a utilizar paginación importamos el mongoosepagination
const Client = require('../moduls/client')
const Reparation = require('../moduls/reparation')
//const Product = require('../moduls/product')

function getClient(req, res) {

	var clientId=req.params.id;

	Client.findById(clientId,(err,client)=>{

		if(err){

			 res.status(500).send({ message: 'Error en la petición' })

		}
		else{
			if(!client){

				res.status(404).send({ message: 'El cliente no existe' })

			}
			else{
				res.status(404).send({client})
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

                 res.status(200).send({clientDelete})
                 //ahora hacemos que tambien borre todas las tareas del cliente que estaban relacionadas con el

                 Reparation.find({client:clientDelete._id}).remove((err,reparationDelete)=>{

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

module.exports = {
    getClient,
    saveClient,
    getClients,
    updateClient,
    deleteClient
}