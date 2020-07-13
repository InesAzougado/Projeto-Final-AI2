import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import '../App.css';

class EditComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listMarcacao: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:3000/users/listar_marcacao";
        axios.get(url)
            .then(res => {
                if (res.data.sucess) {
                    const data = res.data.data;
                    this.setState({ listMarcacao: data });
                } else {
                    alert("Error Web Service!");
                }
            })
            .catch(error => {
                alert(error);
            });
    }

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
                                <div>
                                    <table class="fundotabela">
                                        <tr>
                                            <th>Número Cliente</th>
                                            <th>Data</th>
                                            <th>Hora</th>
                                            <th>Estado</th>
                                        </tr>
                                        {this.loadFillData()}
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    loadFillData() {
        return this.state.listMarcacao.map((data, index) => {
            return (

                <tr>
                    <th>{data.id_user}</th>
                    <th>{data.data_marcacao}</th>
                    <th>{data.hora}</th>
                    <th>{data.estado}</th>
                </tr>

            )
        });
    }
}


export default EditComponent;