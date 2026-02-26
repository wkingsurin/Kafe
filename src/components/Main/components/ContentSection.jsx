import classes from "./ContentSection.module.css";

import Title from "../../ui/Title";
import SortComponent from "../../ui/SortComponent";
import DishesComponent from "./DishesComponent";
import Button from "../../ui/Button";

export default function ContentSection({ className, id, category }) {
	return (
		<section className={classes[className]} id={id}>
			<div className="container">
				<div className={classes.contentBlock}>
					<div className={classes.titleBlock}>
						<Title>{category.category}</Title>
						<SortComponent
							options={[
								{ value: "вес", children: "весу" },
								{ value: "цена", children: "цене" },
							]}
						></SortComponent>
					</div>
					<DishesComponent dishes={category.dishesList}></DishesComponent>
					{category.dishesList.length > 4 ? (
						<Button className="contentButton">Показать все</Button>
					) : (
						""
					)}
				</div>
			</div>
		</section>
	);
}
