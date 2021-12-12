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
	filter: {
		_page: 1,
		_limit: 16,
	},
	list: [],
};

const shopFoodSlice = createSlice({
	name: 'shop_food',
	initialState,
	reducers: {
		fetFoodList(state, action: PayloadAction<ListParams>) {
			state.loading = true;
		},

		fetFoodSuccess(state, action: PayloadAction<Food[]>) {
			state.loading = false;
			state.list = action.payload;
		},

		fetFoodFailed(state, action: PayloadAction<string>) {
			state.loading = false;
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
