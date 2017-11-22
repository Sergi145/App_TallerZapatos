import React, { Component } from 'react'
import CheckBox from '../components/checkbox'
import axios from 'axios'
import Api from '../api/api'
import swal from 'sweetalert'

function searchingFor(term){
  return function(x){
    return x.surnames.includes(term|| !term)
  }
}

class Home extends Component {

    constructor(props){

        super(props)
        this.state={show:false};
        this.toggleCheck=this.toggleCheck.bind(this)

        var today=new Date(),
        date=today.getDate()+'-'+(today.getMonth()+1)+'-'+(today.getFullYear()-2000);

        this.state={
            date:date,
            products:[],
            reparations:[],
            clients:[],
            title:'',
            client:'',
            description:'',
            date1:'',
            respnsable:''
         
        }

         this.searchUser=this.searchUser.bind(this);

    }

    searchUser(event){

    this.setState({term:event.target.value})

  }

      componentDidMount() {
    axios.get('https://pure-caverns-39521.herokuapp.com/api/products')
      .then(({data:{products}}) => {
        console.log(products)
        this.setState({products})
      })
      .catch(error=>{
        console.log(error)
      })
  }

   componentWillMount() {
    axios.get('http://localhost:8001/api/reparations')
      .then(({data:{reparations}}) => {
        console.log(reparations)
        this.setState({reparations})
      })
      .catch(error=>{
        console.log(error)
      }),

       axios.get('http://localhost:8001/api/clients')
      .then(({data:{clients}}) => {
        console.log(clients)
        this.setState({clients})
      })
      .catch(error=>{
        console.log(error)
      })

      
  }

   deleteReparation=(_id)=>{

    Api.deleteReparation(_id)

   swal ( "Menos trabajo para ti" ,  "Tarea eliminada" ,  "success" )
    //console.log(_id)     
  }


    toggleCheck=()=>{
        const{show}=this.state;
        this.setState({show:!show})
    }


     handlerCreateReparation=(title,client,description,date,responsable)=>{

     Api.createReparation(title,client,description,date,responsable)


        swal ( "Nueva tarea agregada a tu taller" ,  "Nueva Tarea" ,  "success" )

    
  }

    onChangeTitle=(event)=>{

    event.preventDefault()

      this.setState({

        title:event.target.value

      })
  }

    onChangeClient=(event)=>{

    event.preventDefault()

      this.setState({

        client:event.target.value

      })
  }

    onChangeDescription=(event)=>{

    event.preventDefault()

      this.setState({

        description:event.target.value

      })
  }

    onChangeDate=(event)=>{

    event.preventDefault()

      this.setState({

        date:event.target.value

      })
  }

    onChangeResponsable=(event)=>{

    event.preventDefault()

      this.setState({

        responsable:event.target.value

      })
  }

   getId(_id){

    this.setState({

      _id

    })

  }

    render() {
        return (
         <main className="main col">
                <div className="row">
                    <div className="columna col-lg-7">
                        <div className="widget nueva_reparacion">
                            <h3 className="titulo">Nueva Reparación</h3>
                            <form>
                                <input type="text" name="Titulo de la reparación" placeholder="titulo" onChange={this.onChangeTitle}/>
                                <input type="text" name="Client" placeholder="Buscar cliente por apellido" onChange={this.searchUser}/>
                                <div class="a">
                                  {
                                    this.state.clients.filter(searchingFor(this.state.term)).map((client)=>{
                                    return<p class="client_search"><a href="#"  onClick={()=>{this.handlerSearch(this.state._id)}}>{client.name} {client.surnames}</a></p>
                                  })
                                  }
                               </div>
                                <textarea name="descripcion" id="descripcion" placeholder="Descripción" onChange={this.onChangeDescription}></textarea>
                                <input type="text" name="Responsable" placeholder="Responsable" onChange={this.onChangeResponsable}/>
                                <input className="form-control" type="datetime-local" value={this.state.date} id="example-datetime-local-input" onChange={this.onChangeDate}/>
                               
                                  <label className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" checked/>
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description">Mano de Obra</span>
                                </label>

                               
                                {
                                    this.state.products.length && this.state.products.map((product)=>{
                                        
                                        return  (<label className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input"  onClick={this.toggleCheck}/>
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description">{product.name}</span>
                                           {this.state.show && <CheckBox/>}
                                    
                                       
                                     </label>)       
                                    })
                    
                                }              
                                
                                <div className="d-flex justify-content-center">
                                    <button><i className="fa fa-share" aria-hidden="true" onClick={()=>{this.handlerCreateReparation(this.state.title,this.state.client,this.state.description,this.state.date,this.state.responsable)}}></i>Enviar</button>
                                </div>
        
                            </form>
                        </div>
                    </div>
                    <div className="columna col-lg-5">
                        <div className="widget informacion">
                            <h3 className="titulo">Información</h3>
                            <div className="contenedor d-flex flex-wrap">
                                <div className="caja">
                                    <h3>40</h3>
                                    <p>Euros</p>
                                </div>
                                <div className="caja">
                                    <h3>{this.state.date}</h3>
                                    <p>Fecha</p>
                                </div>
                                <div className="caja">
                                    <img src={require('../img/persona.png')}/>
                                </div>
                            </div>
                        </div>
                        <div className="widget tareas_prioritarias">
                            <h3 className="titulo">Tareas Prioritarias</h3>
                             {
                                this.state.reparations.map((reparation)=>{
                                    return<div className="contenedor">
                                    <div className="tarea_prioritaria d-flex flex-wrap">
                                        <div className="foto_perfil">
                                            <img  src={require('../img/persona2.png')}/>
                                        </div>
                                    <div className="texto">
                                        <p>Titulo:<a><strong>{reparation.title}</strong></a></p>
                                        <p>Cliente:<a><strong>{reparation.id_client}</strong></a></p>
                                        <p>Responsable:<a><strong>{reparation.responsable}</strong></a></p>
                                        <p>Fecha de entrega:<a><strong>{reparation.date}</strong></a></p>
                                        <p className="texto_comentario">{reparation.description}</p>
                                    </div>
                                    <div className="botones d-flex justify-content-start flex-wrap w-100">
                                        <button className="aprobar"><i className="fa fa-mobile" aria-hidden="true"> Enviar SMS</i></button>
                                        <button className="eliminar" onClick={()=>{this.deleteReparation(reparation._id)}}><i className="fa fa-trash" aria-hidden="true">Eliminar</i></button>
                                    </div>
                                </div>                              
                            </div>

                         })
              
                        }
                            
                        </div>
                    </div>
                </div>
            </main>)
    }
}


export default Home


