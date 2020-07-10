import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import '../App.css';

class EditComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listausers: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:3000/employee/listar";
        axios.get(url)
            .then(res => {
                if (res.data.sucess) {
                    const data = res.data.data;
                    this.setState({ listausers: data });
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
            <div>
                <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css' />
                <div class="marccenter">
                    <div class="marc-block" id="m1">
                        <form>
                            <h1>Faça a sua Marcação aqui</h1>
                            <label>Escolher data</label><br></br>
                            <select name="mes" id="mes" required>
                                <option disabled selected>Mês</option>
                                <option>Janeiro</option>
                                <option>Fevereiro</option>
                                <option>Março</option>
                                <option>Abril</option>
                                <option>Maio</option>
                                <option>Junho</option>
                                <option>Julho</option>
                                <option>Agosto</option>
                                <option>Setembro</option>
                                <option>Outubro</option>
                                <option>Novembro</option>
                                <option>Dezembro</option>
                            </select>
                            <select name="dia" id="dia" required>
                                <option disabled selected>Dia</option>
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                                <option>04</option>
                                <option>05</option>
                                <option>06</option>
                                <option>07</option>
                                <option>08</option>
                                <option>09</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select>
                            <select name="hora" id="hora" required>
                                <option disabled selected>Hora</option>
                                <option>9:00-10:00</option>
                                <option>10:00-11:00</option>
                                <option>11:00-12:00</option>
                                <option>12:00-13:00</option>
                                <option>14:00-15:00</option>
                                <option>15:00-16:00</option>
                                <option>16:00-17:00</option>
                                <option>17:00-18:00</option>
                            </select><br></br>

                            <label>Nome</label><br></br>
                            <input type="text" placeholder="" id="nome" required /><br></br>
                            <label>Telemóvel</label><br></br>
                            <input type="text" min="9" max="9" placeholder="" id="tele" required />
                            <br></br><button>Solicitar Marcação</button>
                        </form>
                    </div>
                    <div class="marc-block" id="m2">
                        <form>
                            <h1>Histórico de Marcações</h1><br></br>
                            <label>Data e Estado</label><br></br>
                            <input type="text" placeholder="" id="data" />
                            <input type="text" placeholder="" id="estado" /><br></br><br></br>
                            <label>Contacte-nos</label><br></br>
                            <input type="text" value="123456789" placeholder="" id="tele" readOnly />
                            <input type="text" value="nailsbyines@email.com" placeholder="" id="email" readOnly />
                        </form>
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