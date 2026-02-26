import classes from "./DishesComponent.module.css";

import DishItem from "./DishItem";

export default function DishesComponent({dishes}) {
	return (
		<div className={classes.dishes}>
			{dishes.map((dish) => (
				<DishItem
					key={dish.name}
					imageUrl={dish.imageURL}
					name={dish.name}
					weight={dish.weight}
					price={dish.price}
				></DishItem>
			))}
		</div>
	);
}
