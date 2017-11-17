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
            <button type="button" class="btn btn-info btn-circle btn-xl" data-toggle="modal" data-target="#smallShoes"><i class="fa fa-plus" aria-hidden="true"></i></button>
          
              <div class="modal fade" id="smallShoes" tabindex="-1" role="dialog" aria-labelledby="modalLabelSmall" aria-hidden="true">
                  <div class="modal-dialog modal-sm">
                  <div class="modal-content">

                    <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="x">&times;</span>
                    </button>
                    <h4 class="modal-title" id="modalLabelSmall">Agregar Producto</h4>
                    </div>

                    <form>
                      <div class="form-group space">
                      
                        <input type="email" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Nombre"/>
                         
                      </div>
                      <div class="form-group space">
                      
                      <input type="number" class="form-control" id="exampleInputPrice" placeholder="Precio"/>

                      </div>

                      <button type="button" class="btn btn-success space">Agregar</button>

                      </form>
                          
                  </div>
                  </div>
             </div>
                                
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
