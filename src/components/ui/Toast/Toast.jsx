import classes from "./Toast.module.css";

export default function Toast(props) {
	const { text } = props;

	return <div className={classes.toast}>{text}</div>;
}
