import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { optionCheckbox, typeOptions } from 'constants/shopInfo';
import * as React from 'react';
import './shopFilter.scss';

function ShopFilters() {
	return (
		<div className="shop-filters">
			<h2 className="shop-filters__title">Popular</h2>
			<ul className="shop-filters__list">
				{typeOptions.map(({ img, name }) => (
					<li key={name} className="shop-filters__item shop-filters__item">
						<img src={img} alt="Shop icons" />
						<span className="shop-filters__item-name">{name}</span>
					</li>
				))}
			</ul>

			<h2 className="shop-filters__title">Price</h2>
			<FormControl component="fieldset" sx={{ padding: '2px 0' }}>
				<RadioGroup aria-label="gender" defaultValue="female" name="radio-buttons-group">
					{optionCheckbox.map((value, idx) => (
						<FormControlLabel
							key={idx}
							value={value}
							control={<Radio sx={{ color: '#ff514e !important' }} />}
							label={value}
							sx={{ flexShrink: 0, fontSize: '1.6rem' }}
						/>
					))}
				</RadioGroup>
			</FormControl>

			<h2 className="shop-filters__title">Rate</h2>
			<div className="shop-filters__stars">
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarIcon />
			</div>
			<div className="shop-filters__stars">
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarBorderIcon />
			</div>
			<div className="shop-filters__stars">
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarBorderIcon />
				<StarBorderIcon />
			</div>
		</div>
	);
}

export default ShopFilters;
