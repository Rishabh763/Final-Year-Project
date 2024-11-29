import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const addUser = async (userData) => {
    return await axios.post(`${API_URL}/users`, userData);
};

export const getUser = async (username) => {
    return await axios.get(`${API_URL}/users/${username}`);
};
        