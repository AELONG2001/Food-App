import ButtonScroll from 'components/common/ButtonScroll';
import * as React from 'react';
import Navbar from './pages/Navbar';

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
	return (
		<div>
			<Navbar />
			<ButtonScroll />
		</div>
	);
}
