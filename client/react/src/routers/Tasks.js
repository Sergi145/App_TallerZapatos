import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Tasks extends Component {
    render() {
        return (

          <main className="main col">
             <div className="row">
                    <div className="columna col-lg-12">

                     
                        <div className="widget tareas_prioritarias">
                            <h3 className="titulo">Tareas</h3>
                            <div className="contenedor">
                                <div className="tarea_prioritaria d-flex flex-wrap">
                                    <div className="foto_perfil">
                                        <img  src={require('../img/persona2.png')}/>
                                    </div>
                                    <div className="texto">
                                    	<p>Titulo:<a><strong>Cambio de Tapas</strong></a></p>
                                    	<p>Cliente:<a><strong>Sergio Rodriguez</strong></a></p>
                                        <p>Responsable:<a><strong>Luis Medina</strong></a></p>
                                        <p>Fecha de entrega:<a><strong>12/12/2017</strong></a></p>
										<p>Precio:<a><strong>23 euros</strong></a></p>
                                        <p className="texto_comentario">Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad</p>
                                    </div>
                                    <div className="botones d-flex justify-content-start flex-wrap w-100">
                                        <button className="aprobar"><i className="fa fa-mobile" aria-hidden="true"> Enviar SMS</i></button>
                                        <button className="eliminar"><i className="fa fa-trash" aria-hidden="true"> Eliminar</i></button>
                                    </div>
                                </div>                              
                            </div>
                             <div className="contenedor">
                                <div className="tarea_prioritaria d-flex flex-wrap">
                                    <div className="foto_perfil">
                                        <img  src={require('../img/persona2.png')}/>
                                    </div>
                                    <div className="texto">
                                    	<p>Titulo:<a><strong>Cambio de Tapas</strong></a></p>
                                    	<p>Cliente:<a><strong>Sergio Rodriguez</strong></a></p>
                                        <p>Responsable:<a><strong>Luis Medina</strong></a></p>
                                        <p>Fecha de entrega:<a><strong>12/12/2017</strong></a></p>
										<p>Precio:<a><strong>23 euros</strong></a></p>
                                        <p className="texto_comentario">Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad</p>
                                    </div>
                                    <div className="botones d-flex justify-content-start flex-wrap w-100">
                                        <button className="aprobar"><i className="fa fa-mobile" aria-hidden="true"> Enviar SMS</i></button>
                                        <button className="eliminar"><i className="fa fa-trash" aria-hidden="true"> Eliminar</i></button>
                                    </div>
                                </div>                              
                            </div>
                            <div className="contenedor">
                                <div className="tarea_prioritaria d-flex flex-wrap">
                                    <div className="foto_perfil">
                                        <img  src={require('../img/persona2.png')}/>
                                    </div>
                                    <div className="texto">
                                    	<p>Titulo:<a><strong>Cambio de Tapas</strong></a></p>
                                    	<p>Cliente:<a><strong>Sergio Rodriguez</strong></a></p>
                                        <p>Responsable:<a><strong>Luis Medina</strong></a></p>
                                        <p>Fecha de entrega:<a><strong>12/12/2017</strong></a></p>
										<p>Precio:<a><strong>23 euros</strong></a></p>
                                        <p className="texto_comentario">Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad</p>
                                    </div>
                                    <div className="botones d-flex justify-content-start flex-wrap w-100">
                                        <button className="aprobar"><i className="fa fa-mobile" aria-hidden="true"> Enviar SMS</i></button>
                                        <button className="eliminar"><i className="fa fa-trash" aria-hidden="true"> Eliminar</i></button>
                                    </div>
                                </div>                              
                            </div>

                        </div>
                    </div>

                    
                    
                  </div>
                 
             

    </main>
       )
    }
}


export default Tasks
