'use strict'


const path = require('path');
const fs = require('fs');
const mongoosePaginate=require('mongoose-pagination')//como vamos a utilizar paginación importamos el mongoosepagination
const Reparation = require('../data/models/ReparationModel')
const Product = require('../data/models/ProductModel')
const Client = require('../data/models/ClientModel')


function getReparations(req,res){


	if(req.params.page){

		var page=req.params.page;//como vamos a utilizar paginamiento creamos una variable page

	}
	else{
		var page=1;//pagina por defecto
	}
	
	var reparationsPerPage=20;//le decimos cada pagina cuantos clientes listara

	Reparation.find().sort('date1').paginate(page,reparationsPerPage,(err,reparations,total)=>{//buscamos los clientes y lo ordenamos por nombre

		if(err){

			 res.status(500).send({ message: 'Error en la petición' })
		}
		else{

			if(!reparations){

				res.status(404).send({ message: 'No hay reparaciones' })

			}
			else{
				
				res.status(200).send({
					total_reparations:total,
					reparations:reparations
				})
			}

		}

	})

}

function getReparations_by_Id(req,res){

	var clientId=req.params.client;

	console.log(clientId)

	if(!clientId){
		var find=Reparation.find({}).sort('title')
	}

	else{
		var find=Reparation.find({client:clientId}).sort('title')
	}
	find.populate({path:'client'}).exec((err,reparations)=>{

		if(err){

			 res.status(500).send({ message: 'Error en la petición' })
		}
		else{

			if(!reparations){

				res.status(404).send({ message: 'No hay reparaciones' })

			}
			else{
				
				res.status(200).send({reparations})
			}

		}

	})
}


function getReparation(req, res) {

	var reparationId=req.params.id;

	Reparation.findById(reparationId).populate({path:'client'}).exec((err,reparation)=>{

		if(err){

			 res.status(500).send({ message: 'Error en la petición' })

		}
		else{
			if(!reparation){

				res.status(404).send({ message: 'La reparación no existe' })

			}
			else{
				res.status(200).send({reparation})
			}
		}
	})

}


function saveReparation(req, res) {

    let reparation = new Reparation() //creamos una instancia de cliente,para poder dar valores o setear los valores


    let params = req.body //recogemos todas las variables que vienen por post

   
    reparation.title = params.title
    reparation.description = params.description
    reparation.date1= params.date1
    reparation.price=params.price
    reparation.responsable=params.responsable
    reparation.client=params.client

  
    reparation.save((err, reparationStored) => {

        if (err)
            res.status(500).send({ message: 'Error al guardar la reparación' })

        else {

            if (!reparationStored) //si no lo a guardado
                res.status(404).send({ message: 'No se a registrado la reparación' })
            else
            	
                res.status(200).send({ reparation: reparationStored })
        }
  
})

}


function updateReparation(req,res){

	var reparationId=req.params.id;//conseguimos el id que nos llega por params

	var update=req.body;//recogemos todo los datos del body que llega por put

	Reparation.findByIdAndUpdate(reparationId,update,{new:true},(err,reparationUpdated)=>{

		 if (err) {
            res.status(500).send({ message: 'Error al actualizar la reparación' })
        }
        else{
             if (!reparationUpdated) { //si no existe el taller

                res.status(404).send({ message: 'No se a podido actualizar la reparación' })
            }
            else{

                 res.status(200).send({ reparation:reparationUpdated})
            }

        }


	})

}



function deleteReparation(req,res){

	var reparationId=req.params.id;//conseguimos el id que nos llega por params

	Reparation.findByIdAndRemove(reparationId,(err,reparationDelete)=>{

		 if (err) {
            res.status(500).send({ message: 'Error al borrar la reparación' })
        }
        else{
             if (!reparationDelete) { //si no existe la reparación

                res.status(404).send({ message: 'No se a podido borrar la reparación' })
            }
            else{

                 res.status(200).send({reparationDelete})
                 //ahora hacemos que tambien borre todas las tareas del cliente que estaban relacionadas con el
            }
        }
	})
}


module.exports = {
    getReparations,
    getReparation,
    saveReparation,
    updateReparation,
    deleteReparation,
    getReparations_by_Id


}


