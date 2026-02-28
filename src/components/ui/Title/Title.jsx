import classes from "./Title.module.css";

export default function Title({ children, styles = {} }) {
	const hasSyles = styles[0] === undefined;

	return (
		<h2 className={classes.title} style={hasSyles && { ...styles }}>
			{children}
		</h2>
	);
}
