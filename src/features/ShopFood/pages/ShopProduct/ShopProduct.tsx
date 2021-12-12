// lazy load img js
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RoomIcon from '@mui/icons-material/Room';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import { Pagination } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectFoodFilter, shopFoodAction } from 'features/ShopFood/shopFoodSlice';
import { Food } from 'models';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// lazy load img css
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ShopProduct.scss';

export interface ShopProductProps {
	foods: Food[];
}

function ShopProduct({ foods }: ShopProductProps) {
	const dispatch = useAppDispatch();
	const filter = useAppSelector(selectFoodFilter);

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		dispatch(
			shopFoodAction.setFilter({
				...filter,
				_page: value,
			})
		);
	};
	return (
		<>
			<div className="shop-product">
				{foods.map((food) => (
					<div key={food.id} className="shop-product_box">
						<div className="shop-product__img-wrapper">
							<LazyLoadImage
								effect="blur"
								src={food.img}
								className="shop-product__img"
								alt=""
								width="100%"
								height="100%"
							></LazyLoadImage>
							<div className="shop-product__rate">
								<StarIcon />
								<span>{food.rate}</span>
							</div>
						</div>

						<div className="shop-product__content">
							<div className="shop-product__name">{food.name}</div>
							<p className="shop-product__description">{food.dsc}</p>
							<div className="shop-product__row">
								<div className="shop-product__location">
									<RoomIcon />
									<span>{food.country}</span>
								</div>
								<div className="shop-product__price">{`$${food.price}`}</div>
							</div>
						</div>

						<div className="shop-product__btns">
							<div className="shop-product__btn">
								<FavoriteBorderIcon />
							</div>
							<div className="shop-product__btn">
								<ShoppingCartIcon />
							</div>
						</div>
						<div className="shop-product__label">Favourite</div>
					</div>
				))}
			</div>
			<Pagination count={4} page={filter._page} onChange={handleChange} />;
		</>
	);
}

export default ShopProduct;
