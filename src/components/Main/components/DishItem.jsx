import classes from "./DishItem.module.css";

export default function DishItem(props) {
	const { imageUrl, name, weight, price } = props;

	return (
		<div className={classes.dishItem}>
			<div className={classes.imageBlock}>
				<img src={imageUrl} alt={name} />
			</div>
			<div className={classes.descriptionBlock}>
				<a href="#" className={classes.name}>
					{name}
				</a>
				<hr />
				<div className={classes.description}>
					<p className={classes.weight}>{weight}</p>
					<p className={classes.price}>{price}</p>
				</div>
			</div>
			<button className={classes.dishButton}>В корзину</button>
		</div>
	);
}
