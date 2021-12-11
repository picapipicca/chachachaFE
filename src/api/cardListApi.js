import axios from "axios";

//아마 url 넣는곳?
const api = axios.create({
	baseURL: 'http://54.180.125.34:3000',
    headers : {'content-type' : 'application/json;charset=UTF-8'},
});

export const carListApi = {
	cars : () => api.get('/api/cars'),
	carsKorea: () => api.get('/api/cars?category=국산차'),
	carsAbroad: () => api.get('/api/cars?category=수입차')
};
