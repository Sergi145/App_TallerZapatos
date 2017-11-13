'use strict'
const jwt=require ('jwt-simple');
const moment=require('moment');//saber la fecha de creacion y expiración del token
const secret="clave_secreta_skylab";

exports.createToken=function(workshop){//pasamos un objeto taller y lo guardamos en un hash para codificarlo

	var payload={//datos que se van a codificar

			sub:workshop._id,//guardamos el id del registro
			name:workshop.name,
			email:workshop.email,
			image:workshop.image,
			iat:moment().unix(),//fecha de creación del token actual
			exp:moment().add(30,'days').unix//expiración dentro de 30 dias

	}

		return jwt.encode(payload,secret)//devolvemos el token codificado y le pasamos una clave secreta
}