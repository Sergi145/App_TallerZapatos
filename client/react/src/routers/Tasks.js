import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Api from '../api/api'
import Pagination from '../components/pagination'
import axios from 'axios'
import swal from 'sweetalert'

class Tasks extends Component {

    constructor(){

        super();

         this.state = {

            reparations:[]
        }


    }

     componentDidMount() {
    axios.get('http://localhost:8001/api/reparations')
      .then(({data:{reparations}}) => {
        console.log(reparations)
        this.setState({reparations})
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

    render() {
        return (

          <main className="main col">
             <div className="row">
                    <div className="columna col-lg-12">

                     
                        <div className="widget tareas_prioritarias">
                            <h3 className="titulo">Tareas</h3>
                            
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
                                        <p>Precio: <a><strong>{reparation.price}</strong> euros</a></p>
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

                        <Pagination/>
             
                    </div>

                    
                    
                  </div>
                 
             

    </main>

       )
    }
}


export default Tasks
