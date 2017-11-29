import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './styles/bootstrap4/css/bootstrap.css'
import './styles/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container-fluid">
        <div className="row">
            <div className="barra-lateral col-12 col-sm-auto">
                <div className="logo">
                   <img src={require('../src/img/logo.jpg')} className="logo_img"/>
                </div>
		
 	 				<Header/>
      				</div>
      				<Main/>
      			</div>
         	</div>
        </div> 
    );
  }
}

export default App;


 



