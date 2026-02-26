import classes from "./ContentSection.module.css";

import Title from "../../ui/Title";
import SortComponent from "../../ui/SortComponent";
import DishesComponent from "./DishesComponent";
import Button from "../../ui/Button";

export default function ContentSection({ className, id }) {
	const dishes = [
		{
			name: "Комбо номер 1",
			description:
				"Состав: Салат цезарь 100 гр, Люля куриный 100 гр, Картофель по-деревенски 100 гр, Булочка 1 шт., Соус белый 1 шт. Морс в подарок.",
			price: "539 ₽",
			weight: "1268 г.",
			imageURL:
				"https://storage.yandexcloud.net/static-prod-resultrest/goods/images/cbf99003-f07c-481d-a747-bda8a12d1dd4-400.jpg",
		},
		{
			name: "Комбо номер 2",
			description:
				"Состав: Плов с курицей 250 гр, Борщ 250 гр, Булочка 1 шт., Лук маринованный 50 гр, Соус красный 30 гр. Морс в подарок.",
			price: "539 ₽",
			weight: "806 г.",
			imageURL:
				"https://storage.yandexcloud.net/static-prod-resultrest/goods/images/81cf8a75-34cb-4e55-91a7-bb0e4719a2db-400.jpg",
		},
		{
			name: "Комбо номер 3",
			description:
				"Состав: Суп сливочный с крас. 250 гр, Картофель с мангала 100 гр, Овощи с мангала 100 гр, Филе бедра 100 гр, Булочка 1 шт., Соус белый 30 гр. Морс в подарок.",
			price: "569 ₽",
			weight: "1976 г.",
			imageURL:
				"https://storage.yandexcloud.net/static-prod-resultrest/goods/images/8c4a4a73-d427-43f2-8894-f5aba20c918a-400.jpg",
		},
	];

	return (
		<section className={classes[className]} id={id}>
			<div className="container">
				<div className={classes.contentBlock}>
					<div className={classes.titleBlock}>
						<Title>Комбо-наборы</Title>
						<SortComponent
							options={[
								{ value: "вес", children: "весу" },
								{ value: "цена", children: "цене" },
							]}
						></SortComponent>
					</div>
					<DishesComponent dishes={dishes}></DishesComponent>
					{dishes.length > 4 ? (
						<Button className="contentButton">Показать все</Button>
					) : (
						""
					)}
				</div>
			</div>
		</section>
	);
}
