import React from 'react'
import { Link } from 'react-router-dom'

const Header=()=> (

                <nav className="menu d-flex d-sm-block justify-content-center flex-wrap">
                    <Link to="/"><i className="fa fa-home" aria-hidden="true"></i><span>Inicio</span></Link>
                    <Link to="/clients"><i className="fa fa-users" aria-hidden="true"></i><span>Clientes</span></Link>
                    <Link to="/products"><i className="fa fa-wrench" aria-hidden="true"></i><span>Productos</span></Link>
                    <Link to="/tasks"><i className="fa fa-tasks" aria-hidden="true"></i><span>Tareas</span></Link>
                    <Link to="/edit_profile"><i className="fa fa-street-view" aria-hidden="true"></i><span>Editar Perfil</span></Link>
                    <a href="#"><i className="fa fa-sign-out" aria-hidden="true"></i><span>Salir</span></a>
                </nav>
            
	)

export default Header

