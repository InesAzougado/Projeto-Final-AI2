import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import '../App.css';

const baseUrl = "http://localhost:3000";

class EditComponent extends React.Component {
    render() {
        return (
            <div class="vernizesscroll">
                <h1 class="titulosscroll">Portefólio</h1>
                <div class="centerscroll">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xs-6 col-sm-12 col-md-12 col-lg-12">
                                <div class="conteudodiv" id="1">

                                    <div class="card">
                                        <div class="cardimgportfolio">
                                            <div class="overlay">
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
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