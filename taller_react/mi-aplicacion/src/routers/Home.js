import React, { Component } from 'react'
import CheckBox from '../components/checkbox'


class Home extends Component {

    constructor(props){

        super(props)
        this.state={show:false};
        this.toggleCheck=this.toggleCheck.bind(this)

        var today=new Date(),
        date=today.getDate()+'-'+(today.getMonth()+1)+'-'+(today.getFullYear()-2000);

        this.state={
            date:date
        }

    }


    toggleCheck=()=>{
        const{show}=this.state;
        this.setState({show:!show})
    }

    render() {
        return (
         <main className="main col">
                <div className="row">
                    <div className="columna col-lg-7">
                        <div className="widget nueva_reparacion">
                            <h3 className="titulo">Nueva Reparación</h3>
                            <form>
                                <input type="text" name="Titulo de la reparación" placeholder="titulo" />
                                <input type="text" name="Client" placeholder="Cliente" />
                                <textarea name="descripcion" id="descripcion" placeholder="Descripción"></textarea>
                            
                                <input className="form-control" type="datetime-local" value="2017-11-19T13:45:00" id="example-datetime-local-input" />
                                <input type="text" name="Responsable" placeholder="Responsable"/>
                                  <label className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" checked/>
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description">Mano de Obra</span>
                                </label>
                                <label className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" onClick={this.toggleCheck}/>
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description">Tapas</span>
                                    {this.state.show && <CheckBox/>}
                                  
                                </label>
                                <label className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input"/>
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description">Cordones</span>
                                     <select className="custom-select">
                                        <option selected>Cantidad</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </label>                   
                                
                                <div className="d-flex justify-content-center">
                                    <button><i className="fa fa-share" aria-hidden="true"></i>Enviar</button>
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
                            <div className="contenedor">
                                <div className="tarea_prioritaria d-flex flex-wrap">
                                    <div className="foto_perfil">
                                        <img  src={require('../img/persona2.png')}/>
                                    </div>
                                    <div className="texto">
                                        <a>John Doe</a><p>Responsable <a>Luis Medina</a></p>
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
                                        <img src={require('../img/persona.png')}/>
                                    </div>
                                    <div className="texto">
                                        <a>Marc Doe</a><p>Responsable <a>Luis Medina</a></p>
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
            </main>)
    }
}


export default Home


