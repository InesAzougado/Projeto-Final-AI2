import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

class listComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listEmployee: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:3000/employee/list";
        axios.get(url)
            .then(res => {
                if (res.data.success) {
                    const data = res.data.data;
                    this.setState({ listEmployee: data });
                } else {
                    alert("Error Web Service!");
                }
            })
            .catch(error => {
                alert(error)
            });
    }

    render() {
        return (
            <table className="table table-hover table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Role</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Admin</td>
                            <td>Nuno Costa</td>
                            <td>ncosta@estgv.ipv.pt</td>
                            <td>Viseu</td>
                            <td>232480533</td>
                            <td>

                            </td>
                            <td>
                                
                            </td>
                        </tr>
                        {this.loadFillData()}
                    </tbody>
                </thead>
            </table>
        );
    }

    //BTN EDIT
    //<Link class="btn btn-outline-info " to={"/edit/"+data.id} >Edit</Link>

    //BTN DELETE
    //<button class="btn btn-outline-danger" onClick={() => this.onDelete(data.id)}> Delete </button>

    loadFillData() {
        return this.state.listEmployee.map((data, index) => {
            return (
                <tr key={index}>
                    <th>{data.id}</th>
                    <td>{data.role.role}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.address}</td>
                    <td>{data.phone}</td>
                    <td>
                        <button className="btn btn-outline-info "> Edit </button>
                    </td>
                    <td>
                        <button className="btn btn-outline-danger ">
                            Delete </button>
                    </td>
                </tr>
            )
        });
    }

    onDelete(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.sendDelete(id)
            } else if (result.dismiss ===
                Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        });
    }

    sendDelete(userId) {
        // url do backend
        const baseUrl = "http://localhost:3000/employee/delete"
        // network
        axios.post(baseUrl, {
            id: userId
        })
            .then(response => {
                if (response.data.success) {
                    Swal.fire(
                        'Deleted!',
                        'Your employee has been deleted.',
                        'success'
                    )
                    this.loadEmployee()
                }
            })
            .catch(error => {
                alert("Error 325 ")
            });
    }

    componentDidMount() {
        this.loadEmployee();
    }
    loadEmployee() {
        const url = "http://localhost:3000/employee/list";
        axios.get(url)
            .then(res => {
                if (res.data.success) {
                    const data = res.data.data;
                    this.setState({ listEmployee: data });
                } else {
                    alert("Error Web Service!");
                }
            })
            .catch(error => {
                alert(error)
            });
    }

}

export default listComponent;