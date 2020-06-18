import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './view/form';
import List from './view/list';
import Edit from './view/edit';
document.createElement('style');

function App() {
  return (
    <Router>

      <div className="App">
        <Link class="btn btn-success " to="/form">Add Employee</Link>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">


        </nav>
      </div>

    </Router>
  );
}
export default App;