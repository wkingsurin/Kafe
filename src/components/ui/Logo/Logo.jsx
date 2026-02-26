import classes from "./Logo.module.css";

export default function Logo(props) {
	const { imageUrl, name } = props;

	return (
		<div className={classes.logo}>
			<img src={imageUrl} alt={name} />
		</div>
	);
}
