import axios from "axios";

class AuthService {
    login(n_cliente, pass) {
        return axios
            .post("http://localhost:8000/users/login", { n_cliente, pass }).then(res => {
                if (res.data.token) {
                    localStorage.setItem("user", JSON.stringify(res.data));
                }
                return res.data;
            }, reason => { throw new Error('Utilizador Inválido'); });
    }
    logout() { localStorage.removeItem("users"); }
    getCurrentUser() { return JSON.parse(localStorage.getItem('users')); }
}
export default new AuthService();