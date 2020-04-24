import axios from 'axios';
import { showAlert } from './alerts';

export const login = async(email, password) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:3000/api/v1/users/login',
            data: {
                email,
                password
            }
        });

        if (res.data.status === 'success') {
            showAlert('success', 'Logged In successfully');
            window.setTimeout(() => {
                location.assign('/');
            }, 1500);
        }
    } catch (error) {
        showAlert('error', error.response.data.message);
    }
}

export const signup = async(name, email, password, passwordConfirm) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:3000/api/v1/users/signup',
            data: {
                name,
                email,
                password,
                passwordConfirm
            }
        });

        if (res.data.status === 'success') {
            showAlert('success', 'Account successfully created');
            window.setTimeout(() => { location.assign('/') }, 1500);
        }
    } catch (error) {
        showAlert('error', error.response.data.message);
    }
}

export const logout = async() => {
    try {
        const res = await axios({
            method: 'GET',
            url: 'http://localhost:3000/api/v1/users/logout',
        });

        if (res.data.status === 'success') {
            location.assign('/');
        }
    } catch (error) {
        showAlert('error', 'Error logging out! Try again.');
    }
}