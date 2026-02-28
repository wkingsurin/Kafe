import classes from "./Button.module.css";

export default function Button({
	className,
	children,
	styles = {},
	type = null,
}) {
	const hasStyles = styles[0] === undefined;

	return (
		<button
			className={classes[className]}
			style={hasStyles && { ...styles }}
			type={type || "button"}
		>
			{children}
		</button>
	);
}
