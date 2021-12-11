import axios from 'axios';


const api = axios.create({
	baseURL: 'http://54.180.125.34:3000',
	headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
});

export const userAPI = {
    login: (id, pwd) => api.post('/api/login', { id: id, pwd: pwd }),
};