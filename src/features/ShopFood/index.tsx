import { Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useEffect } from 'react';
import ShopFilter from './pages/ShopFilter/ShopFilter';
import ShopProduct from './pages/ShopProduct/ShopProduct';
import ShopSearch from './pages/ShopSearch/ShopSearch';
import { selectFoodFilter, selectFoodList, shopFoodAction } from './shopFoodSlice';

export default function ShopFood() {
	const dispatch = useAppDispatch();
	const filter = useAppSelector(selectFoodFilter);
	const foodList = useAppSelector(selectFoodList);

	useEffect(() => {
		dispatch(shopFoodAction.fetFoodList(filter));
	}, [dispatch, filter]);

	return (
		<Grid container maxWidth="lg" sx={{ margin: '0 auto' }}>
			<Grid item xs={2}>
				<ShopFilter />
			</Grid>
			<Grid item xs={10}>
				<ShopSearch />
				<ShopProduct foods={foodList} />
			</Grid>
		</Grid>
	);
}
