import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import '../App.css';

class EditComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listEquipamentos: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:3000/users/listar_equipamentos";
        axios.get(url)
            .then(res => {
                if (res.data.sucess) {
                    const data = res.data.data;
                    this.setState({ listEquipamentos: data });
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
                <h1 class="titulosscroll">Acessórios</h1>

                {this.loadFillData()}
                
            </div>
        );
    }

    loadFillData() {
        return this.state.listEquipamentos.map((data, index) => {
            return (

                <div class="equipamentos">
                    <div>
                        <img src={data.img} width="178px" height="180px"></img>
                    </div>
                    <div class="textsobre">
                        <h6>{data.nome_equip}</h6><br></br>
                        <p>{data.desc}</p>
                        
                    </div>
                    <hr class="linharosinha"></hr>
                </div>
                

            )
        });
    }
}
export default EditComponent;