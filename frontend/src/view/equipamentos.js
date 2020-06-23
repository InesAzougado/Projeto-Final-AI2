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
            dataEmployee: {},
            campName: "",
            campEmail: "",
            campPhone: "",
            campAddress: "",
            stringRole: "",
            selectRole: 0
        }
    }
    componentDidMount() {
        let userId = this.props.match.params.employeeId;
        const url = baseUrl + "/employee/get/" + userId
        axios.get(url)
            .then(res => {
                if (res.data.success) {
                    const data = res.data.data[0]
                    this.setState({
                        dataEmployee: data,
                        campName: data.name,
                        campEmail: data.email,
                        campPhone: data.phone,
                        campAddress: data.address,
                        stringRole: data.role.role,
                        selectRole: data.roleId
                    })
                    console.log(JSON.stringify(data.role.role))
                }
                else {
                    alert("Error web service")
                }
            })
            .catch(error => {
                alert("Error server: " + error)
            })
    }
    render() {
        return (
            <div class="vernizesscroll">
                <div class="equipamentos">
                    <div>
                        <img src="https://i.ibb.co/KxH8m8P/manicure-profissional.jpg"></img>
                    </div>
                    <div class="textsobre">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt molestie velit eu vulputate.
                        Mauris lacinia dui sed nunc suscipit sodales. Aenean ornare eu neque venenatis porttitor.
                        Curabitur molestie feugiat nisi. Nam viverra, tortor ut semper luctus, urna lectus faucibus diam,
                        vel vehicula massa tortor nec enim. Nunc finibus erat sed dolor egestas, eget mattis elit condimentum.
                        Curabitur scelerisque nec neque sed tempus. Nam porttitor, lacus in congue ullamcorper, ex ipsum dapibus risus,
                        sed cursus diam nibh sed nisi. Phasellus aliquet diam eu metus molestie accumsan. Duis consectetur vehicula
                        interdum. Quisque efficitur, sapien et tristique condimentum, velit eros lobortis urna, vitae commodo magna nibh
                        sed leo. Suspendisse odio mi, pellentesque non bibendum nec, rhoncus eget erat.</p>
                    </div>
                </div>
                <div class="equipamentos2">
                    <div>
                        <img class="imgequip2" src="https://i.ibb.co/KxH8m8P/manicure-profissional.jpg"></img>
                    </div>
                    <div class="textoequip2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt molestie velit eu vulputate.
                        Mauris lacinia dui sed nunc suscipit sodales. Aenean ornare eu neque venenatis porttitor.
                        Curabitur molestie feugiat nisi. Nam viverra, tortor ut semper luctus, urna lectus faucibus diam,
                        vel vehicula massa tortor nec enim. Nunc finibus erat sed dolor egestas, eget mattis elit condimentum.
                        Curabitur scelerisque nec neque sed tempus. Nam porttitor, lacus in congue ullamcorper, ex ipsum dapibus risus,
                        sed cursus diam nibh sed nisi. Phasellus aliquet diam eu metus molestie accumsan. Duis consectetur vehicula
                        interdum. Quisque efficitur, sapien et tristique condimentum, velit eros lobortis urna, vitae commodo magna nibh
                        sed leo. Suspendisse odio mi, pellentesque non bibendum nec, rhoncus eget erat.</p>
                    </div>
                </div>
                <div class="equipamentos">
                    <div>
                        <img src="https://i.ibb.co/KxH8m8P/manicure-profissional.jpg"></img>
                    </div>
                    <div class="textsobre">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt molestie velit eu vulputate.
                        Mauris lacinia dui sed nunc suscipit sodales. Aenean ornare eu neque venenatis porttitor.
                        Curabitur molestie feugiat nisi. Nam viverra, tortor ut semper luctus, urna lectus faucibus diam,
                        vel vehicula massa tortor nec enim. Nunc finibus erat sed dolor egestas, eget mattis elit condimentum.
                        Curabitur scelerisque nec neque sed tempus. Nam porttitor, lacus in congue ullamcorper, ex ipsum dapibus risus,
                        sed cursus diam nibh sed nisi. Phasellus aliquet diam eu metus molestie accumsan. Duis consectetur vehicula
                        interdum. Quisque efficitur, sapien et tristique condimentum, velit eros lobortis urna, vitae commodo magna nibh
                        sed leo. Suspendisse odio mi, pellentesque non bibendum nec, rhoncus eget erat.</p>
                    </div>
                </div>
                <div class="equipamentos2">
                    <div>
                        <img class="imgequip2" src="https://i.ibb.co/KxH8m8P/manicure-profissional.jpg"></img>
                    </div>
                    <div class="textoequip2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt molestie velit eu vulputate.
                        Mauris lacinia dui sed nunc suscipit sodales. Aenean ornare eu neque venenatis porttitor.
                        Curabitur molestie feugiat nisi. Nam viverra, tortor ut semper luctus, urna lectus faucibus diam,
                        vel vehicula massa tortor nec enim. Nunc finibus erat sed dolor egestas, eget mattis elit condimentum.
                        Curabitur scelerisque nec neque sed tempus. Nam porttitor, lacus in congue ullamcorper, ex ipsum dapibus risus,
                        sed cursus diam nibh sed nisi. Phasellus aliquet diam eu metus molestie accumsan. Duis consectetur vehicula
                        interdum. Quisque efficitur, sapien et tristique condimentum, velit eros lobortis urna, vitae commodo magna nibh
                        sed leo. Suspendisse odio mi, pellentesque non bibendum nec, rhoncus eget erat.</p>
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