import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'
import axios from 'axios'
import Api from '../api/api'
import swal from 'sweetalert'




function searchingFor(term){
  return function(x){
    return x.surnames.toLowerCase().includes(term.toLowerCase() || !term)
  }
}

class Clients extends Component {

	constructor(){
		super();

    this.state = {

      clients:[],
      term:'',
      name:'',
      surnames:'',
      address:'',
      image:'',
      email:'',
      telephone:'',
      reparaciones:[]

    }

    this.searchHandler=this.searchHandler.bind(this);

	}

  searchHandler(event){

    this.setState({term:event.target.value})

  }

  componentWillMount() {
    axios.get('https://pure-caverns-39521.herokuapp.com/api/clients')
      .then(({data:{clients}}) => {
        this.setState({clients})
      })
      .catch(error=>{
        console.log(error)
      })
  }

  componentDidMount() {

  }

  onChangeName=(event)=>{

    event.preventDefault()

      this.setState({

        name:event.target.value


      })

  }

  onChangeSurnames=(event)=>{

    event.preventDefault()

      this.setState({

        surnames:event.target.value


      })

  }


  onChangeAddress=(event)=>{

    event.preventDefault()

      this.setState({

        address:event.target.value


      })

  }

  onChangeEmail=(event)=>{

    event.preventDefault()

      this.setState({

        email:event.target.value


      })

  }


  onChangeImage=(event)=>{

    event.preventDefault()

      this.setState({

        image:event.target.value


      })

  }

  onChangeTelephone=(event)=>{

    event.preventDefault()

      this.setState({

        telephone:event.target.value


      })

  }


    handlerCreateClient=(name,surnames,address,image,email,telephone)=>{

    console.log(name);
    console.log(surnames);
    console.log(address);
    console.log(image);
    console.log(email);
    console.log(telephone);

   

    swal ( "Nuevo cliente agregado a tu taller" ,  "Client agregado" ,  "success" )

    
     Api.createClient(name,surnames,address,image,email,telephone)
       .then(res => {
          axios.get('https://pure-caverns-39521.herokuapp.com/api/clients')
            .then(({data:{clients}}) => {
              this.setState({clients})
            })
            .catch(console.error)
       })

  }


  handlerModificateClient=(_id,name,surnames,address,image,email,telephone)=>{


    

    swal ( "El cliente de tu taller a sido modificado" ,  "Cliente modificado" ,  "success" )

    
    Api.editClient(_id,name,surnames,address,image,email,telephone)
       .then(res => {
          axios.get('https://pure-caverns-39521.herokuapp.com/api/clients')
            .then(({data:{clients}}) => {
              console.log(clients)
              this.setState({clients})
            })
            .catch(error=>{
              console.log(error)
            })
       })
  }

   deleteClient=(_id)=>{

   

   swal ( "Un usario menos en tu taller" ,  "Usuario eliminado" ,  "success" )
    //console.log(_id)

   
   Api.deleteClient(_id)
       .then(res => {
          axios.get('https://pure-caverns-39521.herokuapp.com/api/clients')
            .then(({data:{clients}}) => {
              console.log(clients)
              this.setState({clients})
            })
            .catch(error=>{
              console.log(error)
            })
       })
  }

   getId(_id){

    this.setState({

      _id

    })

    Api.listReparations_Id(_id)
      .then(response => {
        this.setState({
          reparaciones:response.data.reparations
        })
      })
      .catch(console.error)

  }

    render() {
        return (
        	<main className="main col">
          <button type="button" className="btn btn-info btn-circle btn-xl" data-toggle="modal" data-target="#smallShoes"><i className="fa fa-plus" aria-hidden="true"></i></button>
          <div className="modal fade" id="smallShoes" tabindex="-1" role="dialog" aria-labelledby="modalLabelSmall" aria-hidden="true">
                  <div className="modal-dialog modal-sm">
                  <div className="modal-content">

                    <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className="x">&times;</span>
                    </button>
                    <h4 className="modal-title" id="modalLabelSmall">Agregar Cliente</h4>
                    </div>

                    <form>
                      <div className="form-group space">
                      
                        <input type="text" className="form-control" id="exampleInputName" aria-describedby="NamelHelp" placeholder="Nombre" onChange={this.onChangeName}/>
                         
                      </div>
                      <div className="form-group space">
                      
                        <input type="text" className="form-control" id="exampleInputSurname" aria-describedby="SurnameslHelp" placeholder="Apellidos" onChange={this.onChangeSurnames}/>
                         
                      </div>
                      <div className="form-group space">
                      
                        <input type="text" className="form-control" id="exampleInputAddress" aria-describedby="AddresslHelp" placeholder="Dirección" onChange={this.onChangeAddress}/>
                         
                      </div>
                      <div className="form-group space">
                      
                      <input type="email" className="form-control" id="exampleInputEmail" placeholder="Email" onChange={this.onChangeEmail}/>

                      </div>

                       <div className="form-group space">
                      
                      <input type="number" className="form-control" id="exampleInputTelephone" placeholder="Telefono movil" onChange={this.onChangeTelephone}/>

                      </div>

                      <div className="form-group space">
                      
                      <input type="file" className="form-control" id="exampleInputImage" placeholder="Foto" onChange={this.onChangeImage}/>

                      </div>

                      <button type="button" className="btn btn-success space" onClick={()=>{this.handlerCreateClient(this.state.name,this.state.surnames,this.state.address,this.state.image,this.state.email,this.state.telephone)}}>Agregar</button>

                      </form>
                          
                  </div>
                  </div>
             </div>


          <div className="d-flex align-items-end flex-column">
        <div className="row">
        <div className="mb-auto p-4">
            <div id="custom-search-input">
                <div className="input-group col-md-12">
                    <input type="text" onChange={this.searchHandler} className="form-control input-lg" placeholder="Buscar Apellidos" />
                    <span className="input-group-btn">
                        <button className="btn btn-info btn-lg" type="button">
                           <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                        
                    </span>
                </div>
            </div>
        </div>       
  </div>
</div>
      
  		       <div className="row">
                    <div className="columna col-lg-12">
                     <table className="table">
  					<thead>
    					<tr>
      						<th>Nombre</th>
      						<th>Apellidos</th>
      						<th>Telefono</th>
                  <th>Email</th>
                  <th>Dirección</th>
    					</tr>
  					</thead>
  					<tbody>
    				  {
                this.state.clients.filter(searchingFor(this.state.term)).map((client)=>{
                return<tr><td>{client.name}</td>
                <td>{client.surnames}</td>
                <td>{client.telephone}</td>
                <td>{client.email}</td>
                <td>{client.address}</td>
                <td><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#viewReparation" onClick={()=>{this.getId(client._id)}}><span><i className="fa fa-eye" aria-hidden="true"></i></span></button><button type="button" className="btn btn-success" data-toggle="modal" data-target="#editClient" onClick={()=>{this.getId(client._id)}}><span><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span></button><button type="button" className="btn btn-danger" onClick={()=>{this.deleteClient(client._id)}}><span><i className="fa fa-trash" aria-hidden="true"></i></span></button></td>

                </tr>
                })
      				
              }
  
  					</tbody>

            <div className="modal fade" id="viewReparation" tabindex="-1" role="dialog" aria-labelledby="modalLabelSmall" aria-hidden="true">
                  <div className="modal-dialog modal-sm">
                  <div className="modal-content">

                    <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className="x">&times;</span>
                    </button>
                    <h4 className="modal-title" id="modalLabelSmall">Ver Reparaciones Pendientes</h4>
                    </div>
                    {

                      this.state.reparaciones.map(reparacion => {
                        return <p className="reparation_pen">{reparacion.title}:<span className="important"> Dia:{reparacion.date1}</span></p>
                         
                      })  
                    }
                    
                          
                  </div>
                  </div>
             </div>


              <div className="modal fade" id="editClient" tabindex="-1" role="dialog" aria-labelledby="modalLabelSmall" aria-hidden="true">
                  <div className="modal-dialog modal-sm">
                  <div className="modal-content">

                    <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className="x">&times;</span>
                    </button>
                    <h4 className="modal-title" id="modalLabelSmall">Editar Cliente</h4>
                    </div>

                    <form>
                      <div className="form-group space">
                      
                        <input type="text" className="form-control" id="exampleInputName" aria-describedby="NamelHelp" placeholder="Nombre" onChange={this.onChangeName}/>
                         
                      </div>
                      <div className="form-group space">
                      
                        <input type="text" className="form-control" id="exampleInputSurname" aria-describedby="SurnameslHelp" placeholder="Apellidos" onChange={this.onChangeSurnames}/>
                         
                      </div>
                      <div className="form-group space">
                      
                        <input type="text" className="form-control" id="exampleInputAddress" aria-describedby="AddresslHelp" placeholder="Dirección" onChange={this.onChangeAddress}/>
                         
                      </div>
                      <div className="form-group space">
                      
                      <input type="email" className="form-control" id="exampleInputEmail" placeholder="Email" onChange={this.onChangeEmail}/>

                      </div>

                       <div className="form-group space">
                      
                      <input type="number" className="form-control" id="exampleInputTelephone" placeholder="Telefono movil" onChange={this.onChangeTelephone}/>

                      </div>

                      <div className="form-group space">
                      
                      <input type="file" className="form-control" id="exampleInputImage" placeholder="Foto" onChange={this.onChangeImage}/>

                      </div>

                      <button type="button" className="btn btn-success space" onClick={()=>{this.handlerModificateClient(this.state._id,this.state.name,this.state.surnames,this.state.address,this.state.image,this.state.email,this.state.telephone)}}>Modificar</button>

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

export default Clients
