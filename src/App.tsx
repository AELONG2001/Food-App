/** @format */

import Container from 'components/Layout/Container/Container';
import Headers from 'components/Layout/Header/Header';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div style={{ overflow: 'hidden' }}>
			<Router>
				<Headers />
				<Routes>
					<Route path="/" element={<Container />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
