import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import '../App.css';

const baseUrl = "http://localhost:3000";

class EditComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataEmployee: {},
            camp_id_user: "",
            camp_email: "",
            camp_pass: "",
            camp_tipo: "",
            camp_nome: "",
            camp_telemovel: ""
        }
    }
    componentDidMount() {
        let userId = this.props.match.params.employeeId;
        const url = baseUrl + "/users/user_profile/" + sessionStorage.getItem('id')
        axios.get(url)
            .then(res => {
                if (res.data.sucess) {
                    const data = res.data.data[0]
                    this.setState({
                        dataEmployee: data,
                        camp_id_user: data.id_user,
                        camp_email: data.email,
                        camp_pass: data.pass,
                        camp_tipo: data.tipo,
                        camp_nome: data.nome,
                        camp_telemovel: data.telemovel,
                    })
                }
                else {
                    alert("Error web service")
                }
            })
            .catch(error => {
                alert("Error server: " + error)
            })
    }

    render() {
        return (
            <div class="logincenter">

                <h1 class="titulos">Perfil</h1>

                <div>
                    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css' />
                    <div class="marccenter">
                        <div class="marc-block" id="m2">
                            <form>
                                <h1>Os meus dados</h1>
                                <label>Número de Cliente</label><br></br>
                                <p>{this.state.camp_id_user}</p>
                                <label>Email</label><br></br>
                                <p>{this.state.camp_email}</p>
                                <label>Palavra pass</label><br></br>
                                <p>{this.state.camp_pass}</p>
                                <label>Nome</label><br></br>
                                <p>{this.state.camp_nome}</p>
                                <label>Número de Telemovel</label><br></br>
                                <p>{this.state.camp_telemovel}</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
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

//<div  class="row" ><p>{this.state.campLocalidade}</p></div>