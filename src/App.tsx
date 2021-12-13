/** @format */

import Container from 'components/Layout/Container/Container';
import Footer from 'components/Layout/Footer/Footer';
import Header from 'components/Layout/Header/Header';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div style={{ overflow: 'hidden' }}>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Container />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
