import classes from "./CategoriesList.module.css";

export default function CategoriesList() {
	return (
		<div className={classes.categories}>
			<ul className={classes.categoriesList}>
				<li className={classes.category}>
					<a href="#combo" className={classes.categoryLink}>
						Комбо-наборы
					</a>
				</li>
				<li className={classes.category}>
					<a href="#mangal" className={classes.categoryLink}>
						Блюда с мангала
					</a>
				</li>
				<li className={classes.category}>
					<a href="#sets" className={classes.categoryLink}>
						Наборы
					</a>
				</li>
				<li className={classes.category}>
					<a href="#pizza" className={classes.categoryLink}>
						Хачапури / Пицца / Лаваш
					</a>
				</li>
				<li className={classes.category}>
					<a href="#child" className={classes.categoryLink}>
						Детское меню
					</a>
				</li>
				<li className={classes.category}>
					<a href="#garnish" className={classes.categoryLink}>
						Гарниры
					</a>
				</li>
				<li className={classes.category}>
					<a href="#soups" className={classes.categoryLink}>
						Супы
					</a>
				</li>
				<li className={classes.category}>
					<a href="#salads" className={classes.categoryLink}>
						Салаты
					</a>
				</li>
				<li className={classes.category}>
					<a href="#desserts" className={classes.categoryLink}>
						Десерты
					</a>
				</li>
				<li className={classes.category}>
					<a href="#drinks" className={classes.categoryLink}>
						Напитки
					</a>
				</li>
				<li className={classes.category}>
					<a href="#sauces" className={classes.categoryLink}>
						Соусы
					</a>
				</li>
			</ul>
		</div>
	);
}
