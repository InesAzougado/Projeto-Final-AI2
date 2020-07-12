import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import '../App.css';

class EditComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            campo_id_marcacao: "",
            campo_id_cliente: "",
            campo_data: "",
            campo_hora: "",
            campo_estado: ""
        }
    }

    render() {
        return (
            <div class="logincenter">

                <h1 class="titulos">Marcações</h1>

            <div>
                <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css' />
                <div class="marccenter">
                    <div class="marc-block" id="m1">
                        <form>
                            <h1>Faça a sua Marcação aqui</h1>
                            <label>Escolher data</label><br></br>
                            <input type="date" placeholder="" id="nome" value={this.state.campo_data} onChange={(value) =>
                                                        this.setState({ campo_data: value.target.value })} required />

                            <select name="hora" id="hora" value={this.state.campo_hora} onChange={(value) =>
                                                        this.setState({ campo_hora: value.target.value })} required>
                                <option disabled selected>Hora</option>
                                <option>9:00-10:00</option>
                                <option>10:00-11:00</option>
                                <option>11:00-12:00</option>
                                <option>12:00-13:00</option>
                                <option>14:00-15:00</option>
                                <option>15:00-16:00</option>
                                <option>16:00-17:00</option>
                                <option>17:00-18:00</option>
                            </select><br></br>
                            <br></br><button type="submit" onClick={() => this.sendSave()}>Guardar</button>
                        </form>
                    </div>
                    <div class="marc-block" id="m2">
                        <form>
                            <h1>Histórico de Marcações</h1><br></br>
                            <label>Data e Estado</label><br></br>
                            <input type="text" placeholder="" id="data" readOnly/>
                            <input type="text" placeholder="" id="estado" readOnly/><br></br><br></br>
                            <label>Contacte-nos</label><br></br>
                            <input type="text" value="123456789" placeholder="" id="tele" readOnly />
                            <input type="text" value="nailsbyines@email.com" placeholder="" id="email" readOnly />
                        </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }

    sendSave() {
        if (this.state.campo_data === "") {
            alert("Insert Name!")
        }
        else if (this.state.campo_=== "") {
            alert("Insert Email!")
        }
        else {
            const baseUrl = "http://localhost:3000/users/add_marcacao"
            const datapost = {
                data_marcacao: this.state.campo_data,
                hora: this.state.campo_hora,
            }

            axios.post(baseUrl, datapost)
                .then(response => {
                    if (response.data.sucess === true) {
                        alert(response.data.message)
                    }
                    else {
                        alert(response.data.message)
                    }
                }).catch(error => {
                    alert("Error 34 " + error)
                })
        }
    }

    loadFillData() {
        return this.state.listausers.map((data, index) => {
            return (
                <tr>
                    <th scope="row">{data.id_user}</th>
                    <td>{data.n_cliente}</td>
                    <td>{data.pass}</td>
                    <td>{data.tipo}</td>
                </tr>
            )
        });
    }
}


export default EditComponent;