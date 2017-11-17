import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'	


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
      term:''

    }

    this.searchHandler=this.searchHandler.bind(this);

	}

  searchHandler(event){

    this.setState({term:event.target.value})

  }

  componentDidMount() {
    axios.get('http://localhost:8001/api/clients')
      .then(({data:{clients}}) => {
        console.log(clients)
        this.setState({clients})
      })
      .catch(error=>{
        console.log(error.response.data)
      })
  }

    render() {
        return (

        	<main className="main col">

          <div className="container">
  <div className="row">
        <div className="col-md-4">
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
    					</tr>
  					</thead>
  					<tbody>
    				  {
                this.state.clients.filter(searchingFor(this.state.term)).map(function(client){
                return<tr><td>{client.name}</td>
                <td>{client.surnames}</td>
                <td>{client.telephone}</td>
                <td><button type="button" className="btn btn-primary"><span><i className="fa fa-eye" aria-hidden="true"></i></span></button><button type="button" className="btn btn-success"><span><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span></button><button type="button" className="btn btn-danger"><span><i className="fa fa-trash" aria-hidden="true"></i></span></button></td>

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


export default Clients
