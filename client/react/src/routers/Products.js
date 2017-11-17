import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class Products extends Component {

    constructor(){
    super();

    this.state = {

      products:[]
    }

  }

  componentDidMount() {
    axios.get('http://localhost:8001/api/products')
      .then(({data:{products}}) => {
        console.log(products)
        this.setState({products})
      })
      .catch(error=>{
        console.log(error.response.data)
      })
  }




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
    			  {
                this.state.products.map(function(product){
                return<tr><td>{product.name}</td>
                <td>{product.price} euros</td>
                <td><button type="button" className="btn btn-success"><span><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span></button><button type="button" className="btn btn-danger"><span><i className="fa fa-trash" aria-hidden="true"></i></span></button></td>

                </tr>
                })
              
              }

  					</tbody>
					</table>
                	</div>
                 
                </div>

		</main>
       )
    }
}


export default Products
