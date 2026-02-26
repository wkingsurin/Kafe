import classes from "./CategoriesList.module.css";

import Category from "./Category";

import data from "../../../data.json";

export default function CategoriesList() {
	const tempCategories = data.map((c) => c.category);

	return (
		<div className={classes.categories}>
			<ul className={classes.categoriesList}>
				{tempCategories.map((category) => (
					<Category>{category}</Category>
				))}
			</ul>
		</div>
	);
}
