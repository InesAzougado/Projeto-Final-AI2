import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import '../App.css';
import { data } from 'jquery';
import swal from 'sweetalert2';

window.Swal = swal;

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Este campo é de preenchimento obrigatório!
            </div>
        );
    }
};

class EditComponent extends React.Component {

    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            email: "",
            password: "",
            loading: false,
            message: "",
            roleUser: "",
        };
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value });
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value });
    }

    submitHandler = (e) => {

        e.preventDefault();
        let NCliente = this.state.NCliente;
        let Pass = this.state.Pass;

        sessionStorage.setItem('NCliente', NCliente);

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                NCliente: NCliente,
                Pass: Pass,
            })
        }).then(res => { return res.json() })
            .then((responseJson) => {
                if (responseJson.auth === true) {
                    swal({
                        title: "Bem-vindo!" + " " + NCliente,
                        text: "Obrigado"
                    }).then(function () {
                        fetch("http://localhost:3000/users/idutilizador", {
                            method: "POST",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                NCliente: NCliente,
                            })
                        }).then(res => res.json())
                            .then(data => {
                                sessionStorage.setItem('idutilizadorsessao', data)
                            })
                    })
                }
            })
    }

    render() {
        return (
            <div class="logincenter">
                <div class="login-block">
                    <h1>Faça Login</h1>
                    <form onSubmit={this.handleLogin} ref={c => { this.form = c; }}>
                        <div className="form-group">
                            <label htmlFor="email">Número de Cliente</label>
                            <input type="text" className=" form-control" name="email"
                                value={this.state.email} onChange={this.onChangeEmail}
                                validations={[required]} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className=" form-control" name="password"
                                value={this.state.password} onChange={this.onChangePassword}
                                validations={[required]} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block"
                                disabled={this.state.loading}>
                                {this.state.loading && (<span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                            </button>
                        </div>
                        {this.state.message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        );
    }
}

export default EditComponent;