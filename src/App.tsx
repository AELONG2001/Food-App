/** @format */

import HomePage from 'components/HomePage/HomePage';
import LoginPage from 'features/Auth/Login/Login';
import PopularFood from 'features/PopularFood';
import ShowFoodById from 'features/ShopFood/pages/ShowFoodById';
import React from 'react';
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/shop" element={<ShowFoodById />}>
					<Route path=":id" element={<Outlet />} />
				</Route>
				<Route path="/popular-food" element={<PopularFood />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</Router>
	);
}

export default App;
