/** @format */

import HomePage from 'components/HomePage/HomePage';
import LoginPage from 'features/Auth/Login/Login';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</Router>
	);
}

export default App;
