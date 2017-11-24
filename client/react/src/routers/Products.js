import React, { Component } from 'react'
import axios from 'axios'
import Api from '../api/api'
import swal from 'sweetalert'


class Products extends Component {

    constructor(){
    super();

    this.state = {

      products:[],
      name:'',
      price:''
    }

  }


  componentDidMount() {
    axios.get('https://pure-caverns-39521.herokuapp.com/api/products')
      .then(({data:{products}}) => {
        console.log(products)
        this.setState({products})
      })
      .catch(error=>{
        console.log(error.response.data)
      })

      
  }

  onChangeName=(event)=>{
    event.preventDefault()

    this.setState({

      name:event.target.value

    })

  }

  onChangePrice=(event)=>{

    event.preventDefault()

      this.setState({

        price:event.target.value

      })
  }



  handlerCreate=(name,price)=>{

    console.log(name);
    console.log(price)

    


    swal ( "Nuevo producto agregado a tu taller" ,  "Producto agregado" ,  "success" )

    
    Api.createProduct(name,price)
       .then(res => {
          axios.get('https://pure-caverns-39521.herokuapp.com/api/products')
            .then(({data:{products}}) => {
              console.log(products)
              this.setState({products})
            })
            .catch(error=>{
              console.log(error)
            })
       })

  }

  handlerModificate=(_id,name,price)=>{

    console.log(name)
    console.log(price)

    


    swal ( "El producto de tu taller a sido modificado" ,  "Producto modificado" ,  "success" )

    Api.editProduct(_id,name,price)
       .then(res => {
          axios.get('https://pure-caverns-39521.herokuapp.com/api/products')
            .then(({data:{products}}) => {
              console.log(products)
              this.setState({products})
            })
            .catch(error=>{
              console.log(error)
            })
       })

  }

    deleteProduct=(_id)=>{

    Api.deleteProduct(_id)
       .then(res => {
          axios.get('https://pure-caverns-39521.herokuapp.com/api/products')
            .then(({data:{products}}) => {
              console.log(products)
              this.setState({products})
            })
            .catch(error=>{
              console.log(error)
            })
       })

     swal ( "Un producto menos en tu taller" ,  "Producto eliminado" ,  "success" )
    //console.log(_id)
  }

  getId(_id){

    this.setState({

      _id

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
                      
                        <input type="text" class="form-control" id="exampleInputName" aria-describedby="NamelHelp" placeholder="Nombre" onChange={this.onChangeName} />
                         
                      </div>
                      <div class="form-group space">
                      
                      <input type="number" class="form-control" id="exampleInputPrice" placeholder="Precio" onChange={this.onChangePrice}/>

                      </div>

                      <button type="button" class="btn btn-success space" onClick={()=>{this.handlerCreate(this.state.name,this.state.price)}}>Agregar</button>

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
                this.state.products.length && this.state.products.map((product)=>{
                return<tr><td>{product.name}</td>
                <td>{product.price} euros</td>
                <td><button type="button" className="btn btn-success" data-toggle="modal" data-target="#editProduct" onClick={()=>{this.getId(product._id)}}><span><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span></button><button type="button" className="btn btn-danger" onClick={()=>{this.deleteProduct(product._id)}}><span><i className="fa fa-trash" aria-hidden="true"></i></span></button></td>

                </tr>
              })
              
              }

            </tbody>
             <div class="modal fade" id="editProduct" tabindex="-1" role="dialog" aria-labelledby="modalLabelSmall" aria-hidden="true">
                  <div class="modal-dialog modal-sm">
                  <div class="modal-content">

                    <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="x">&times;</span>
                    </button>
                    <h4 class="modal-title" id="modalLabelSmall">Editar Producto</h4>
                    </div>

                    <form>
                      <div class="form-group space">
                      
                        <input type="text" class="form-control" id="exampleInputName" aria-describedby="NamelHelp" placeholder="Nombre" onChange={this.onChangeName}   Value="3"/>
                         
                      </div>
                      <div class="form-group space">
                      
                      <input type="number" class="form-control" id="exampleInputPrice" placeholder="Precio" onChange={this.onChangePrice}/>

                      </div>

                      <button type="button" class="btn btn-success space" onClick={()=>{this.handlerModificate(this.state._id,this.state.name,this.state.price)}}>Modificar</button>

                      </form>
                          
                  </div>
                  </div>
             </div>
          </table>
                  </div>
                 
                </div>

    </main>
       )
    }
}


export default Products
