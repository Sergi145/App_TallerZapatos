'use strict'

const path = require('path');
const fs = require('fs');
const mongoosePaginate=require('mongoose-pagination')//como vamos a utilizar paginación importamos el mongoosepagination
const Product = require('../data/models/ProductModel')
const Reparation = require('../data/models/ReparationModel')


function getProducts(req,res){

	if(req.params.page){

		var page=req.params.page;//como vamos a utilizar paginamiento creamos una variable page
	}
	else{
		var page=1;//pagina por defecto
	}
	
	var productsPerPage=10;//le decimos cada pagina cuantos clientes listara

	Product.find().sort('name').paginate(page,productsPerPage,(err,products,total)=>{//buscamos los clientes y lo ordenamos por nombre

		if(err){

			 res.status(500).send({ message: 'Error en la petición' })
		}
		else{

			if(!products){

				res.status(404).send({ message: 'No hay productos' })

			}
			else{
				
				res.status(200).send({
					total_products:total,
					products:products
				})
			}

		}

	})

}


function getProduct(req, res) {

	var productId=req.params.id;

	Product.findById(productId,(err,product)=>{

		if(err){

			 res.status(500).send({ message: 'Error en la petición' })

		}
		else{
			if(!product){

				res.status(404).send({ message: 'El producto no existe' })

			}
			else{
				res.status(404).send({product})
			}
		}
	})

}


function saveProduct(req, res) {

    let product = new Product() //creamos una instancia de cliente,para poder dar valores o setear los valores


    let params = req.body //recogemos todas las variables que vienen por post

    console.log(params)

    product.name = params.name
    product.cant_def = params.cant_def
    product.price = params.price
   

    product.save((err, productStored) => {

        if (err)
            res.status(500).send({ message: 'Error al guardar el producto' })

        else {

            if (!productStored) //si no lo a guardado
                res.status(404).send({ message: 'No se a registrado el producto' })
            else
                res.status(200).send({ product: productStored })
        }
  
})

}

function updateProduct(req,res){

	var productId=req.params.id;//conseguimos el id que nos llega por params

	var update=req.body;//recogemos todo los datos del body que llega por put

	Product.findByIdAndUpdate(productId,update,{new:true},(err,productUpdated)=>{

		 if (err) {
            res.status(500).send({ message: 'Error al actualizar el producto' })
        }
        else{
             if (!productUpdated) { //si no existe el taller

                res.status(404).send({ message: 'No se a podido actualizar el producto' })
            }
            else{

                 res.status(200).send({ product:productUpdated})
            }

        }


	})

}


function deleteProduct(req,res){

	var productId=req.params.id;//conseguimos el id que nos llega por params

	Product.findByIdAndRemove(productId,(err,productDelete)=>{

		 if (err) {
            res.status(500).send({ message: 'Error al borrar el producto' })
        }
        else{
             if (!productDelete) { //si no existe el taller

                res.status(404).send({ message: 'No se a podido borrar el producto' })
            }
            else{

                 res.status(200).send({productDelete})
                 //ahora hacemos que tambien borre todas las tareas del cliente que estaban relacionadas con el
            }
        }
	})
}


module.exports = {
    getProducts,
    getProduct,
    saveProduct,
    updateProduct,
    deleteProduct

}