import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import '../App.css';

class EditComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            camp_email: "",
            camp_pass: "",
            camp_tipo: "1",
            camp_nome: "",
            camp_telemovel: "",
        }
    }

    render() {
        return (
            <div class="logincenter">

                <h1 class="titulos">Registo de Novo Cliente</h1>

                <div>
                    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css' />
                    <div class="marccenter">
                        <div class="marc-block" id="m1">
                            <form>
                                <label>Email</label><br></br>
                                <input type="email" placeholder="" id="data" value={this.state.camp_email} onChange={(value) =>
                                    this.setState({ camp_email: value.target.value })} required /><br></br>
                                <label>Palavra Pass</label><br></br>
                                <input type="password" placeholder="" id="data" value={this.state.camp_pass} onChange={(value) =>
                                    this.setState({ camp_pass: value.target.value })} required /><br></br>
                                <label>Nome Completo</label><br></br>
                                <input type="text" placeholder="" id="data" value={this.state.camp_nome} onChange={(value) =>
                                    this.setState({ camp_nome: value.target.value })} required /><br></br>
                                <label>Número de Telemóvel</label><br></br>
                                <input type="text" placeholder="" id="data" value={this.state.camp_telemovel} onChange={(value) =>
                                    this.setState({ camp_telemovel: value.target.value })} required /><br></br>
                                <br></br>
                                <br></br>
                                <button type="submit" class="btn btn-primary" onClick={() => this.sendSave()}>Registar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    sendSave() {
        if (this.state.camp_nome === "") {
            alert("Insert Name!")
        }
        else if (this.state.camp_email === "") {
            alert("Insert Email!")
        }
        else {
            const baseUrl = "http://localhost:3000/users/add_user"
            const datapost = {
                email: this.state.camp_email,
                pass: this.state.camp_pass,
                tipo: "1",
                nome: this.state.camp_nome,
                telemovel: this.state.camp_telemovel,
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

    /*loadFillData() {
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
    }*/
}


export default EditComponent;