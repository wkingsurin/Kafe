import classes from "./CategoriesList.module.css";

import Category from "./Category";

import data from "../../../data.json";

export default function CategoriesList({ options = {} }) {
	const { type = "default", list } = options;

	if (type === "default") {
		const tempCategories = data.map((c) => ({ name: c.category, id: c.id }));

		return (
			<div className={classes.categories}>
				<ul className={classes.categoriesList}>
					{tempCategories.map((category) => (
						<Category key={category.name} id={category.id}>
							{category.name}
						</Category>
					))}
				</ul>
			</div>
		);
	}
	if (type === "profile") {
		return (
			<div className={classes.categories} style={{justifyContent: 'flex-start'}}>
				<ul className={classes.categoriesList}>
					{list.map((l) => (
						<Category key={l}>{l}</Category>
					))}
				</ul>
			</div>
		);
	}
}
