import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { showWorkshops } from '../api/api'
import axios from 'axios'	


axios.get('http://localhost:8001/api/workshop').then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
  

class Clients extends Component {

	constructor(){

		super();


	}

    render() {
        return (
        
        	<main className="main col">
  		       <div className="row">
                    <div className="columna col-lg-12">
                     <table className="table">
  					<thead>
    					<tr>
      						<th>Nombre</th>
      						<th>Apellidos</th>
      						<th>Telefono</th>
    					</tr>
  					</thead>
  					<tbody>
    				<tr>
      					<td>Diego</td>
      					<td>Armando Maradona</td>
      					<td>645345051</td>
      					<td><button type="button" className="btn btn-success"><span><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span></button><button type="button" className="btn btn-danger"><span><i className="fa fa-trash" aria-hidden="true"></i></span></button></td>

      				</tr>

  					</tbody>
					</table>
                	</div>
                 
                </div>

		</main>


          
       )
    }
}


export default Clients
