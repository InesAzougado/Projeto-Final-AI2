import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import '../App.css';

class EditComponent extends React.Component {

    render() {
        return (
            <div class="logincenter">

                <h1 class="titulos">Gerir Marcações</h1>

            <div>
                <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css' />
                <div class="marccenter">
                    <div class="marc-block" id="m2">
                        <form>
                            <h1>Lista de Marcações</h1>
                            <label>Data e Estado</label><br></br>
                            <input type="text" placeholder="" id="data" />
                            <input type="text" placeholder="" id="estado" /><br></br><br></br>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}


export default EditComponent;