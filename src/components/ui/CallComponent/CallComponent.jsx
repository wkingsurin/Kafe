import classes from "./CallComponent.module.css";

export default function CallComponent() {
	return (
		<a href="tel:12345678910" className={classes.orderBlock}>
			<p className={classes.phone}>+7 (343) 123-45-67</p>
			<p className={classes.text}>Сделать заказ</p>
		</a>
	);
}
