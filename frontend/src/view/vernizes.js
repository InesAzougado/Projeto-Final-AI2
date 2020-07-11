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
            listVervizes: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:3000/users/listar_vernizes";
        axios.get(url)
            .then(res => {
                if (res.data.sucess) {
                    const data = res.data.data;
                    this.setState({ listVervizes: data });
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
        return this.state.listVervizes.map((data, index) => {
            return (

                <div class="card">
                    <div class="cardimg">
                        <div class="overlay">
                        </div>
                    </div>
                    <footer class="carddesc">
                        <p class="titulofilme">{data.nome_cor}</p>
                        <p class="textofilme">{data.ref}</p>
                    </footer>
                </div>
            )
        });
    }
}
export default EditComponent;

                /*<tr>
                    <th scope="row"><img class="photo" src={perfil} /></th>
                    <td>{data.Nome} <div><a href="verperfil_dev.html"></a></div></td>
                    <td>{data.AnosEmpresa}</td>
                    <td>{data.TipoUser}</td>
                    <td><button type="button" class="btn btn-info"><Link to={"/verperfil_rh/" + data.ID_User} >Info</Link></button></td>
                </tr>*/