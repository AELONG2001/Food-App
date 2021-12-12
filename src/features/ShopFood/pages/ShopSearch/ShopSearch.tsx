import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import './shopSearch.scss';

export default function ShopSearch() {
	return (
		<div className="shop-handle">
			<form className="shop-handle__search">
				<input placeholder="Search your product" />
				<div className="shop-handle__search-btn">
					<SearchIcon />
				</div>
			</form>

			<div className="shop-handle__display-types">
				<ViewListIcon className={`shop-handle__display-type active'}`} />
				<ViewComfyIcon className="shop-handle__display-type active" />
			</div>
		</div>
	);
}
