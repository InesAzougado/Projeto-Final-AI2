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

                <h1 class="titulos">Início</h1>

                <div class="videocenter">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/2qa0SLWF31w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        );
    }
}

export default EditComponent;