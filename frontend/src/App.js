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
                <a href="" class=""><img src="https://i.ibb.co/DtrFdt4/login.png" width="20px" alt="Login"></img> Login</a>
              </div>
            </div>

            <div class="centermenu">
              <ul>
                <li><a href="/sobre">Sobre</a></li>
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

      <div class="video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ZgVbsVxVJmw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div class="footer">
        <div class="footersocial1">
          <a href="https://www.facebook.com/ines.azougado.58" target="_blank"><img src="https://i.ibb.co/2NmpjNH/facebook.png" class="logo" width="30px" alt="Facebook"></img></a>
        </div>
        <div class="footersocial2">
          <a href="https://www.instagram.com/inesazougadoo" target="_blank"><img src="https://i.ibb.co/0VZ2Pqj/instagram.png" class="logo" width="30px" alt="Instagram"></img></a>
        </div>
        <div class="footersocial3">
          <a href="http://www.youtube.com" target="_blank"><img src="https://i.ibb.co/gFpxZgn/youtube.png" class="logo" width="30px" alt="YouTube"></img></a>
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