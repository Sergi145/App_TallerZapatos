import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Products extends Component {
    render() {
        return (

            	<main className="main col">
            <button type="button" class="btn btn-info btn-circle btn-xl" data-toggle="modal" data-target="#addUser"><i class="fa fa-plus" aria-hidden="true"></i></button>
            
             <div className="row">
                    <div className="columna col-lg-12">
                     <table className="table">
  					<thead>
    					<tr>
      						<th>Nombre</th>
      						<th>Precio</th>
    					</tr>
  					</thead>
  					<tbody>
    				<tr>
      					<td>Gomas</td>
      					<td>3 euros</td>
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


export default Products
