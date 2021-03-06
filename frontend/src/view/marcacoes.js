import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import '../App.css';

class EditComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            camp_id: "",
            camp_data_marcacao: "",
            camp_hora: "",
            camp_estado: "Pendente",
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
                            <h1>Solicite a sua Marcação aqui</h1>
                            <label>Escolher data</label><br></br>
                            <input type="date" placeholder="" id="nome" value={this.state.camp_data_marcacao} onChange={(value) =>
                                                        this.setState({ camp_data_marcacao: value.target.value })} required /><br></br>
                            <select name="hora" id="nome" value={this.state.camp_hora} onChange={(value) =>
                                                        this.setState({ camp_hora: value.target.value })} required>
                                <option disabled selected>Hora</option>
                                <option>9:00-10:00</option>
                                <option>10:00-11:00</option>
                                <option>11:00-12:00</option>
                                <option>12:00-13:00</option>
                                <option>14:00-15:00</option>
                                <option>15:00-16:00</option>
                                <option>16:00-17:00</option>
                                <option>17:00-18:00</option>
                            </select>
                            <br></br>
                            <br></br>
                            <label>Número de Cliente</label><br></br>
                            <input type="text" placeholder="" id="nome" value={this.state.camp_id} onChange={(value) =>
                                                        this.setState({ camp_id: value.target.value })} required />
                            <br></br>
                            <br></br>
                            <button type="submit" class="btn btn-primary" onClick={() => this.sendSave()}>Solicitar Marcação</button>
                        </form>
                    </div>
                    <div class="marc-block" id="m2">
                        <form>
                            <h1>Histórico de Marcações</h1><br></br>
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

    sendSave() {
        if (this.state.campName === "") {
            alert("Insert Name!")
        }
        else if (this.state.campEmail === "") {
            alert("Insert Email!")
        }
        else {
            const baseUrl = "http://localhost:3000/users/add_marcacao"
            const datapost = {
                id_user: this.state.camp_id,
                data_marcacao: this.state.camp_data_marcacao,
                hora: this.state.camp_hora,
                estado: "Pendente",
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