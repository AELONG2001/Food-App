import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const baseURL = 'https://ig-food-menus.herokuapp.com';

const axiosClient = axios.create({
	baseURL: baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
});

//Add request interceptor
axiosClient.interceptors.request.use(
	function (config: AxiosRequestConfig) {
		return config;
	},

	function (error) {
		return Promise.reject(error);
	}
);

//Add a response interceptor
axiosClient.interceptors.response.use(
	function (response: AxiosResponse) {
		return response.data;
	},

	function (error) {
		return Promise.reject(error);
	}
);

export default axiosClient;
