import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class Profile extends Component {
    render() {
        return (

          <main className="main col">
             <div className="row">
                    <div className="columna col-lg-12">


  <div class="row">
                <div class="panel panel-primary">
                    <div class="panel-body">
                        <form method="POST" action="#" role="form">
                            <div class="form-group">
                                <h2>Editar Perfil</h2>
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="signupName">Nombre</label>
                                <input id="signupName" type="text" maxlength="50" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="signupEmail">Email</label>
                                <input id="signupEmail" type="email" maxlength="50" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="signupEmailagain">Imagen</label>
                                <input id="signupEmailagain" type="file" maxlength="50" class="form-control"/>
                            </div>
                           
                            <div class="form-group">
                                <button id="signupSubmit" type="submit" class="btn btn-info btn-block">Validar Campos</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>


          
                    
                  </div>
                 
              </div>

    </main>
       )
    }
}


export default Profile
