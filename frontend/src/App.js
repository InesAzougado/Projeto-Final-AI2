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
            <div class="fundobranco col-xs-12 col-sm-12 col-md-12 col-lg-12">

            </div>
            <nav>
            </nav>
            <img src="imagens/logo.png" class="imgslide"/>
          </div>
        </div>
      </div>
      
    </Router>
  );
}

export default App;

//<Link class="btn btn-success " to="/form">Add Employee</Link>
//<Link class="btn btn-outline-info " to={"/edit/"} >Edit</Link>