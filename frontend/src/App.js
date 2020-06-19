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
            <img src="https://i.ibb.co/PG8pcq6/logo.png" alt="merda para isto"></img>
      <div className="App">
      
        <div class="row">
          <div class="fundo col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="fundobranco col-xs-12 col-sm-12 col-md-12 col-lg-12"></div>
            <ul class="">
              <li><button class="btnnav" to={""}><p class="texto">Sobre</p></button></li>
              <li><button class="btnnav" to={""}><p class="texto">Vernizes</p></button></li>
              <li><button class="btnnav" to={""}><p class="texto">Equipamentos</p></button></li>
              <li><button class="btnnav" to={""}><p class="texto">Dicas</p></button></li>
              <li><button class="btnnav" to={""}><p class="texto">Portefólio</p></button></li>
              <li><button class="btnnav" to={""}><p class="texto">Marcações</p></button></li>
            </ul>
          </div>
        </div>
      </div>

    </Router>
  );
}

export default App;

//<Link class="btn btn-success " to="/form">Add Employee</Link>
//<Link class="btn btn-outline-info " to={"/edit/"} >Edit</Link>