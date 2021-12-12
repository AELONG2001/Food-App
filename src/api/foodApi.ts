import { ListParams } from 'models/common';
import { Food } from 'models/food';
import axiosClient from './axiosClient';

const foodApi = {
	getBestFood(params: ListParams): Promise<Food[]> {
		const url = '/best-foods';
		return axiosClient.get(url, { params });
	},
};

export default foodApi;
