import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RoomIcon from '@mui/icons-material/Room';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import { useAppSelector } from 'app/hooks';
import 'features/ShopFood/pages/ShopProduct/ShopProduct.scss';
import { selectFoodList } from 'features/ShopFood/shopFoodSlice';
import { Food } from 'models';
import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './styles.scss';

export interface DetailRelatedProps {
	id?: string;
}

export default function DetailRelated({ id }: DetailRelatedProps) {
	const listProduct = useAppSelector(selectFoodList);
	const [products, setProducts] = useState<Food[]>([]);

	useEffect(() => {
		if (listProduct.length <= 0) return;

		const productFilter = listProduct.filter((product) => product.id !== id);
		const randomProducts = [];

		for (let i = 0; i < 5; i++) {
			const num = Math.floor(Math.random() * listProduct.length);
			randomProducts.push(productFilter[num]);
		}
		setProducts(randomProducts);
	}, []);

	return (
		<>
			{products && products.length > 0 && (
				<div style={{ margin: '0 auto' }}>
					<div className="related-heading">Related Products</div>
					<div className="shop-product shop-product__related">
						{products.map((food) => (
							<div key={food.id} className="shop-product_box shop-product_box-related">
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
				</div>
			)}
		</>
	);
}
