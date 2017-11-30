import React, { Component } from 'react'
import axios from 'axios'
import Api from '../api/api'
import swal from 'sweetalert'


class Home extends Component {

    constructor(props){

        super(props)
       
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
            price:'',
            date1:'',
            responsable:'',
            isChecked:[]      
        }

    }

  
  componentDidMount() {
    axios.get('https://pure-caverns-39521.herokuapp.com/api/products')
      .then(({data:{products}}) => {
        console.log(products)
        this.setState({products})
        const isChecked =[]
        for(let i=0; i<products.length;i++){
              isChecked.push(false)
        }
        this.setState({isChecked})
      })
      .catch(error=>{
        console.log(error)
      }),
    axios.get('https://pure-caverns-39521.herokuapp.com/api/reparations')
      .then(({data:{reparations}}) => {
        console.log(reparations)
        this.setState({reparations})
      })
      .catch(error=>{
        console.log(error)
      })

  }

   componentWillMount() {
  

       axios.get('https://pure-caverns-39521.herokuapp.com/api/clients')
      .then(({data:{clients}}) => {
        console.log(clients)
        this.setState({clients})
      })
      .catch(error=>{
        console.log(error)
      })

      
  }

   deleteReparation=(event)=>{
    event.preventDefault()
    Api.deleteReparation(event.target.value)
       .then(res => {
        axios.get('https://pure-caverns-39521.herokuapp.com/api/reparations')
            .then(({data:{reparations}}) => {
              this.setState({reparations})
            })
            .catch(error=>{
              console.log(error)
            })
       })

   swal ( "Menos trabajo para ti" ,  "Tarea eliminada" ,  "success" )

  }


    toggleCheck=()=>{
        const{show}=this.state;
        this.setState({show:!show})
    }


  handlerCreateReparation=(event)=>{
    event.preventDefault()

    Api.createReparation(this.state.title,this.state.client,this.state.description,this.state.date1,this.state.responsable,this.state.price)
       .then(res => {
        axios.get('https://pure-caverns-39521.herokuapp.com/api/reparations')
            .then(({data:{reparations}}) => {
              this.setState({reparations})
            })
            .catch(error=>{
              console.log(error)
            })
       })

   swal ( "Nueva tarea agregada a tu taller" ,  "Nueva Tarea" ,  "success" )

    
  }

    onChangeTitle=(event)=>{

    event.preventDefault()
   
      this.setState({

        title:event.target.value,

      })
  }

    onChangeClient=(event)=>{

    event.preventDefault()

    console.log(event.target.value)

      this.setState({

        client:event.target.value

      })
  }

  onChangePrice=(event)=>{

    event.preventDefault()

  
      this.setState({

        price:event.target.value

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

     console.log(event.target.value)

      this.setState({

        date1:event.target.value

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

  addPrice=(event,index)=>{
    //console.log(this.state.isChecked[index])
        const isChecked= this.state.isChecked
        isChecked[index] =  !this.state.isChecked[index]
    
         this.setState({isChecked})

        if(!this.state.isChecked[index])
        {
          let price =parseFloat(this.state.price)-parseFloat(event.target.value)
          this.setState({price})
        }
        else 
        {
         let price = parseFloat(this.state.price)+parseFloat(event.target.value)
          this.setState({price})
        }

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
                          
                                <select className="custom-select as col-lg-1" id="inlineFormCustomSelect" onChange={this.onChangeClient}>
                                <option selected>Elegir Cliente</option>
                                 {
                                    this.state.clients.length && this.state.clients.map((client)=>{
                      
                                        return  (<option value={client._id} >{client.surnames},{client.name}</option>)       
                                    })
                    
                                }     
                                
                               </select>
                                <p></p>
                                <textarea name="descripcion" id="descripcion" placeholder="Descripción" onChange={this.onChangeDescription}></textarea>
                                <input type="text" name="Responsable" placeholder="Responsable" onChange={this.onChangeResponsable}/>
                                <input className="form-control" type="number" name="Responsable"   value={this.state.price} placeholder="Precio de la reparación" onChange={this.onChangePrice}/>
                              
                                <input className="form-control" type="date" value={this.state.date1} id="example-datetime-local-input" onChange={this.onChangeDate}/>
                                 
                                <br/>
                                {
                                    this.state.products.length && this.state.products.map((product,index)=>{
                      
                                        return  (<label className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" value={product.price} checked={this.state.isChecked[index]} onChange={(event)=>{this.addPrice(event,index)}}/>
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description">{product.name}</span>
                                        
                                    
                                       
                                     </label>)       
                                    })
                    
                                }              
                                
                                <div className="d-flex justify-content-center">
                                    <button onClick={this.handlerCreateReparation}><i className="fa fa-share" aria-hidden="true"></i>Enviar</button>
                                </div>
        
                            </form>
                        </div>
                    </div>
                    <div className="columna col-lg-5">
                        <div className="widget informacion">
                            <h3 className="titulo">Información</h3>
                            <div className="contenedor d-flex flex-wrap">
                                <div className="caja">
                                    <h3>{this.state.price}</h3>
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
                         <h3 className="titulo">Tareas Prioritarias</h3>
                        <div className="widget tareas_prioritarias">                   
                             {
                                this.state.reparations.map((reparation)=>{
                                    return  <div className="contenedor">
                                    <div className="tarea_prioritaria d-flex flex-wrap">
                                        <div className="foto_perfil">
                                            <img  src={require('../img/persona2.png')}/>
                                        </div>
                                    <div className="texto">
                                        <p>Titulo:<a><strong>{reparation.title}</strong></a></p>
                                        <p>Responsable:<a><strong>{reparation.responsable}</strong></a></p>
                                        <p>Fecha de entrega:<a><strong>{reparation.date1}</strong></a></p>
                                        <p className="texto_comentario">{reparation.description}</p>
                                    </div>
                                    <div className="botones d-flex justify-content-start flex-wrap w-100">
                                        <button className="aprobar"><i className="fa fa-mobile" aria-hidden="true"> Enviar SMS</i></button>
                                        <button className="eliminar" value={reparation._id} onClick={this.deleteReparation}>Eliminar</button>
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


