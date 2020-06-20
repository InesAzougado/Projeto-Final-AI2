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
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/vernizes">Vernizes</Link></li>
                <li><Link to="/equipamentos">Equipamentos</Link></li>
                <li><Link to="/dicas">Dicas</Link></li>
                <li><Link to="/portefolio">Portefólio</Link></li>
                <li><Link to="/marcacoes">Marcações</Link></li>
              </ul>
            </div>

          </div>
        </div>
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

      <Route path="/sobre" exact component={Sobre}/> 
      <Route path="/vernizes" exact component={Vernizes}/> 
      <Route path="/equipamentos" exact component={Equipamentos}/>
      <Route path="/dicas" exact component={Dicas}/> 
      <Route path="/portefolio" exact component={Portefolio}/> 
      <Route path="/marcacoes" exact component={Marcacoes}/>  

    </Router>
  );
}

export default App;

//<Link class="btn btn-success " to="/form">Add Employee</Link>
//<Link class="btn btn-outline-info " to={"/edit/"} >Edit</Link>