import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
class listComponent extends React.Component {
    render() {
        return (
            <table class="table table-hover table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Role</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th colspan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Admin</td>
                        <td>Nuno Costa</td>
                        <td>ncosta@estgv.ipv.pt</td>
                        <td>Viseu</td>
                        <td>232480533</td>
                        <td>
                            <button class="btn btn-outline-info "> Edit
</button>
                        </td>
                        <td>
                            <button class="btn btn-outline-danger "> Delete
</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
export default listComponent;