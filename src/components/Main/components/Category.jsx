import classes from "./Category.module.css";

export default function Category({
	id = "",
	children,
	onSwitchTab = () => {},
}) {
	const tabName =
		children === "Главная"
			? "main"
			: children === "Профиль"
			? "profile"
			: children === "Корзина"
			? "basket"
			: "main";

	return (
		<li className={classes.category} onClick={() => onSwitchTab(tabName)}>
			<a href={"#" + id} className={classes.categoryLink}>
				{children}
			</a>
		</li>
	);
}
