import { Food } from 'models/food';
import React from 'react';
import './styles.scss';

export interface DetailImageProps {
	id?: string;
	listFood: Food[];
}

export default function DetailImage({ id, listFood }: DetailImageProps) {
	return (
		<div className="detail__img-box">
			{listFood.map((food, idx) => (
				<div key={idx} className="detail__img-box-content">
					{food.id === id && <img src={food.img} alt={food.name} />}
				</div>
			))}
		</div>
	);
}
