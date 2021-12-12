import * as React from 'react';
import Navbar from './pages/Navbar';

export interface HeadersProps {}

export default function Headers(props: HeadersProps) {
	return (
		<div>
			<Navbar />
		</div>
	);
}
