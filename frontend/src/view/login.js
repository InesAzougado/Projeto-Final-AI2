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
            campName: "",
            campEmail: "",
            campPhone: "",
            campAddress: "",
            stringRole: "",
            selectRole: 0
        }
    }
    componentDidMount() {
        let userId = this.props.match.params.employeeId;
        const url = baseUrl + "/employee/get/" + userId
        axios.get(url)
            .then(res => {
                if (res.data.success) {
                    const data = res.data.data[0]
                    this.setState({
                        dataEmployee: data,
                        campName: data.name,
                        campEmail: data.email,
                        campPhone: data.phone,
                        campAddress: data.address,
                        stringRole: data.role.role,
                        selectRole: data.roleId
                    })
                    console.log(JSON.stringify(data.role.role))
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
                <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css' />
                <div class="logo"></div>
                <div class="login-block">
                    <h1>Faça Login</h1>
                    <form>
                        <input type="text" value="" placeholder="Nº de Cliente" id="username" />
                        <input type="password" value="" placeholder="Palavra-passe" id="password" />
                        <button>Entrar</button>
                    </form>
                </div>
            </div>
        );
    }

    sendUpdate() {
        // get parameter id
        let userId = this.props.match.params.employeeId;
        // url de backend
        const url = baseUrl + "/employee/update/" + userId
        // parametros de datos post
        const datapost = {
            name: this.state.campName,
            email: this.state.campEmail,
            phone: this.state.campPhone,
            address: this.state.campAddress,
            role: this.state.selectRole
        }
        axios.post(url, datapost)
            .then(response => {
                if (response.data.success === true) {
                    alert(response.data.message)
                }
                else {
                    alert("Error")
                }
            }).catch(error => {
                alert("Error 34 " + error)
            })
    }
}
export default EditComponent;