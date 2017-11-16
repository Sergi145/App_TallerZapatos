import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'	

class Clients extends Component {

	constructor(){
		super();

    this.state = {

      workshops:[]
    }

	}

  componentDidMount() {
    axios.get('http://localhost:8001/api/workshop')
      .then(({data:{workshops}}) => {
        console.log(workshops)
        this.setState({workshops})
      })
      .catch(error=>{
        console.log(error.response.data)
      })
  }

    render() {
        return (

        	<main className="main col">

          <div class="container">
  <div class="row">
        <div class="col-md-4">
            <div id="custom-search-input">
                <div class="input-group col-md-12">
                    <input type="text" class="form-control input-lg" placeholder="Buscar" />
                    <span class="input-group-btn">
                        <button class="btn btn-info btn-lg" type="button">
                           <i class="fa fa-search" aria-hidden="true"></i>
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
                this.state.workshops.map(function(workshop){
                return<tr><td>{workshop.name}</td>
                <td>{workshop.email}</td>
                <td>{workshop.image}</td>
                <td><button type="button" className="btn btn-primary"><span><i class="fa fa-eye" aria-hidden="true"></i></span></button><button type="button" className="btn btn-success"><span><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span></button><button type="button" className="btn btn-danger"><span><i className="fa fa-trash" aria-hidden="true"></i></span></button></td>

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
