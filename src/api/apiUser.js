import { API } from '../utils/config';
import axios from 'axios';

export const getUser = () => {
    return axios.get(`${API}/user`)
}

export const addUser = (user) => {
    return axios.post(`${API}/user`, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const getUserDetails = (id) => {
    return axios.get(`${API}/user/${id}`)
}

export const updateUser = (id, user) => {
    return axios.put(`${API}/user/${id}`, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const deleteUser = (id) => {
    return axios.delete(`${API}/user/${id}`)
}