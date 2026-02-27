import classes from "./Category.module.css";

export default function Category({ id = "combo", children }) {
	return (
		<li className={classes.category}>
			<a href={"#" + id} className={classes.categoryLink}>
				{children}
			</a>
		</li>
	);
}
