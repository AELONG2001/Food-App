import { RootState } from 'app/store';
import { Food } from 'models/food';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListParams } from 'models/common';

export interface ShopFood {
	loading: boolean;
	filter: ListParams;
	list: Food[];
}

const initialState: ShopFood = {
	loading: false,
	list: [],
	filter: {
		_page: 1,
		_limit: 16,
	},
};

const shopFoodSlice = createSlice({
	name: 'shop_food',
	initialState,
	reducers: {
		fetchFoodList(state, action: PayloadAction<ListParams>) {
			state.loading = true;
		},

		fetchFoodSuccess(state, action: PayloadAction<Food[]>) {
			state.list = action.payload;
			state.loading = false;
		},

		fetchFoodFailed(state, action: PayloadAction<string>) {
			state.loading = false;
		},

		fetchBurgersFood(state, action: PayloadAction<Food[]>) {
			state.list = action.payload;
		},

		fetchBreadsFood(state, action: PayloadAction<Food[]>) {
			state.list = action.payload;
		},

		fetchSandWichesFood(state, action: PayloadAction<Food[]>) {
			state.list = action.payload;
		},

		fetchDrinksFood(state, action: PayloadAction<Food[]>) {
			state.list = action.payload;
		},

		fetchPizzasFood(state, action: PayloadAction<Food[]>) {
			state.list = action.payload;
		},
		setFilter(state, action: PayloadAction<ListParams>) {
			state.filter = action.payload;
		},

		setFilterWidthDebounce(state, action: PayloadAction<ListParams>) {},
	},
});

export const shopFoodAction = shopFoodSlice.actions;

export const selectFoodLoading = (state: RootState) => state.food.loading;
export const selectFoodList = (state: RootState) => state.food.list;
export const selectFoodFilter = (state: RootState) => state.food.filter;

const shopFoodReducer = shopFoodSlice.reducer;
export default shopFoodReducer;
