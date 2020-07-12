import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { data } from 'jquery';
import swal from 'sweetalert2';
import axios from 'axios';

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


        const baseUrl = "http://localhost:3000/users/login"

        const datapost = {
            email: this.state.email,
            password: this.state.password
        };

        axios
            .post(baseUrl, datapost)
            .then((response) => {
                if (response.data.success === true) {
                    //console.log(response.data.data[0].id_user)
                    alert("Bem vindo!");
                    sessionStorage.setItem('id', response.data.data[0].id_user)
                    sessionStorage.setItem('id', response.data.data[0].id_user) //seria tipo
                    window.location.reload(false);
                }
                else {
                    alert("Preencha os campos corretamente");
                }
            })
            .catch((error) => {
                alert("Error 34 " + error);
            });

    }

    render() {
        return (
            <div class="logincenter">
                <div class="login-block">
                    <h1>Faça Login</h1>
                    <form onSubmit={this.submitHandler} ref={c => { this.form = c; }}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className=" form-control" name="email"
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
                            <button className="btn btn-primary btn-block" type="submit">
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