import classes from "./Button.module.css";

export default function Button({
	className,
	children,
	styles = {},
	type = null,
	onClick = () => {},
}) {
	const hasStyles = styles[0] === undefined;
	const isBasket = children === "Корзина";

	return (
		<button
			className={classes[className]}
			style={hasStyles && { ...styles }}
			type={type || "button"}
			onClick={() => {
				isBasket ? onClick("basket") : null;
			}}
		>
			{children}
		</button>
	);
}
