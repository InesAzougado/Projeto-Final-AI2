import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import '../App.css';


class EditComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listPortefolio: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:3000/users/listar_portefolio";
        axios.get(url)
            .then(res => {
                if (res.data.sucess) {
                    const data = res.data.data;
                    this.setState({ listPortefolio: data });
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
            <div class="vernizesscroll">
                <h1 class="titulosscroll">Portefólio</h1>
                <div class="centerscroll">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xs-6 col-sm-12 col-md-12 col-lg-12">
                                <div class="conteudodiv" id="1">

                                    {this.loadFillData()}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    loadFillData() {
        return this.state.listPortefolio.map((data, index) => {
            return (

                <div class="card2">
                    <div class="cardimgportfolio">
                        <div class="overlay">
                        <img class="zoom" src={data.img} width="180px" height="180px"></img>
                        </div>
                    </div>
                </div>
            )
        });
    }
}
export default EditComponent;