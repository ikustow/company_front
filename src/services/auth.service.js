import axios from 'axios';
import authHeader from "@/services/auth-header";

const API_URL = 'http://localhost:8000/api/auth/';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';

const headers = {
    'Access-Control-Allow-Origin': '*'
};

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'signin', {
                username: user.username,
                password: user.password
            }, { headers: headers })
            .then(response => {

                if (response.data) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();
