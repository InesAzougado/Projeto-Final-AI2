import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Equipamentos from './view/equipamentos';
import Vernizes from './view/vernizes';
import Sobre from './view/sobre';
import Dicas from './view/dicas';
import Portefolio from './view/portefolio';
import Marcacoes from './view/marcacoes';

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

            <div class="centermenu">
              <ul>
                <li><a class="active" href="/sobre">Sobre</a></li>
                <li><a href="/vernizes">Vernizes</a></li>
                <li><a href="/equipamentos">Equipamentos</a></li>
                <li><a href="/dicas">Dicas</a></li>
                <li><a href="/portefolio">Portefólio</a></li>
                <li><a href="/marcacoes">Marcações</a></li>
              </ul>
            </div>

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