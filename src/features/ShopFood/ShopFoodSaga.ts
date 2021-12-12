import { shopFoodAction } from './shopFoodSlice';
import { takeLatest, call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { ListParams } from 'models/common';
import { Food } from 'models';
import foodApi from 'api/foodApi';

function* fetFoodList(action: PayloadAction<ListParams>) {
	try {
		const listFood: Food[] = yield call(foodApi.getBestFood, action.payload);
		yield put(shopFoodAction.fetFoodSuccess(listFood));
	} catch (error) {
		yield put(shopFoodAction.fetFoodFailed(error as string));
	}
}

export default function* foodSaga() {
	yield takeLatest(shopFoodAction.fetFoodList, fetFoodList);
}
