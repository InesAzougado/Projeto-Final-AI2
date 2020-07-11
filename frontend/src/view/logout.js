import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { data } from 'jquery';
import swal from 'sweetalert2';
import axios from 'axios';

window.Swal = swal;

class EditComponent extends React.Component {

    render() {
        return (
            <div class="logincenter">

                <h1 class="titulos">Entra e faz a tua marcação</h1>
                
            </div>
        );
    }
}

export default EditComponent;