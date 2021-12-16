import React from 'react';

import ShopFood from 'features/ShopFood/index';
import Header from 'components/Layout/Header/Header';
import Footer from 'components/Layout/Footer/Footer';
import BannerPopularFood from './pages/BannerPopularFood';

export default function PopularFood() {
	return (
		<div>
			<Header />
			<BannerPopularFood />
			<div style={{ padding: '60px 0' }}>
				<ShopFood />
			</div>
			<Footer />
		</div>
	);
}
