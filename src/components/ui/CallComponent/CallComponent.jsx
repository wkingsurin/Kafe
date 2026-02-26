import classes from "./CallComponent.module.css";

export default function CallComponent(props) {
	const { phone, text } = props;

	return (
		<a href="tel:12345678910" className={classes.orderBlock}>
			<p className={classes.phone}>{phone}</p>
			<p className={classes.text}>{text}</p>
		</a>
	);
}
