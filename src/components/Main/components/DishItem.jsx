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
				<div className={classes.descriptionWrapper}>
					<hr />
					<div className={classes.description}>
						<p className={classes.weight}>{weight}</p>
						<div className={classes.priceBlock}>
							<span className={classes.priceOutdated}>{price}</span>
							<span className={classes.price}>{price}</span>
						</div>
					</div>
				</div>
			</div>
			<button className={classes.dishButton}>В корзину</button>
		</div>
	);
}
