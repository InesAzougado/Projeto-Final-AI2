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
            listSobre: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:3000/users/listar_sobre";
        axios.get(url)
            .then(res => {
                if (res.data.sucess) {
                    const data = res.data.data;
                    this.setState({ listSobre: data });
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

                <h1 class="titulos">Sobre</h1>

                {this.loadFillData()}
                
            </div>
        );
    }

    loadFillData() {
        return this.state.listSobre.map((data, index) => {
            return (

                <div class="sobre">
                    <div>
                        <img src={data.img}></img>
                    </div>
                    <div class="textsobre">
                        <p>{data.desc}</p>
                    </div>
                </div>
            )
        });
    }    
}

export default EditComponent;