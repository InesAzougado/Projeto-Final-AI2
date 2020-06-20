import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './view/form';
import List from './view/list';
import Edit from './view/edit';

function App() {
  return (
    <Router>

      <div className="App">

        <div class="row">
          <div class="fundo col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="logonavbar">
              <img src="https://i.ibb.co/nwdDYxy/logobrancosombra.png" class="logo" width="250px" alt="Logo Inês Azougado Nails"></img>
            </div>
            <div class="fundobranco col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="login">
                <img src="https://i.ibb.co/DtrFdt4/login.png" class="logo" width="20px" alt="Login"></img> Login
              </div>
              
            </div>
            <ul class="">
              <li><button class="btnnav" to={""}>Sobre</button></li>
              <li><button class="btnnav" to={""}>Vernizes</button></li>
              <li><button class="btnnav" to={""}>Equipamentos</button></li>
              <li><button class="btnnav" to={""}>Dicas</button></li>
              <li><button class="btnnav" to={""}>Portefólio</button></li>
              <li><button class="btnnav" to={""}>Marcações</button></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="footersocial1">
          <img src="https://i.ibb.co/2NmpjNH/facebook.png" class="logo" width="30px" alt="Facebook"></img>
        </div>
        <div class="footersocial2">
          <img src="https://i.ibb.co/0VZ2Pqj/instagram.png" class="logo" width="30px" alt="Instagram"></img>
        </div>
        <div class="footersocial3">
          <img src="https://i.ibb.co/gFpxZgn/youtube.png" class="logo" width="30px" alt="YouTube"></img>
        </div>
        <div class="footertext">
          Nails by Inês Azougado © 2020
        </div>
        <div class="footermorada">
          <div class="arrowfoot">
            <img src="https://i.ibb.co/fDFQmjT/arrowmorada.png" class="logo" width="20px" alt="Logo Inês Azougado Nails"></img>
          </div>
          Avenida das Casas 111<br></br>3500 Viseu
      </div>
      </div>
    </Router>
  );
}

export default App;

//<Link class="btn btn-success " to="/form">Add Employee</Link>
//<Link class="btn btn-outline-info " to={"/edit/"} >Edit</Link>