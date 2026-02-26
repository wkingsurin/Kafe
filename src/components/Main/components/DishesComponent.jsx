import classes from "./DishesComponent.module.css";

export default function DishesComponent() {
	return (
		<div className={classes.dishes}>
			<div className={classes.dishItem}>
				<div className={classes.imageBlock}>
					<img
						src="https://storage.yandexcloud.net/static-prod-resultrest/goods/images/cbf99003-f07c-481d-a747-bda8a12d1dd4-400.jpg"
						alt="Dish"
					/>
				</div>
				<div className={classes.descriptionBlock}>
					<a href="#" className={classes.name}>
						Комбо номер 1
					</a>
					<hr />
					<div className={classes.description}>
						<p className={classes.weight}>806 г.</p>
						<p className={classes.price}>539 ₽</p>
					</div>
				</div>
				<button className={classes.dishButton}>В корзину</button>
			</div>
			<div className={classes.dishItem}>
				<div className={classes.imageBlock}>
					<img
						src="https://storage.yandexcloud.net/static-prod-resultrest/goods/images/cbf99003-f07c-481d-a747-bda8a12d1dd4-400.jpg"
						alt="Dish"
					/>
				</div>
				<div className={classes.descriptionBlock}>
					<a href="#" className={classes.name}>
						Комбо номер 1
					</a>
					<hr />
					<div className={classes.description}>
						<p className={classes.weight}>806 г.</p>
						<p className={classes.price}>539 ₽</p>
					</div>
				</div>
				<button className={classes.dishButton}>В корзину</button>
			</div>
			<div className={classes.dishItem}>
				<div className={classes.imageBlock}>
					<img
						src="https://storage.yandexcloud.net/static-prod-resultrest/goods/images/cbf99003-f07c-481d-a747-bda8a12d1dd4-400.jpg"
						alt="Dish"
					/>
				</div>
				<div className={classes.descriptionBlock}>
					<a href="#" className={classes.name}>
						Комбо номер 1
					</a>
					<hr />
					<div className={classes.description}>
						<p className={classes.weight}>806 г.</p>
						<p className={classes.price}>539 ₽</p>
					</div>
				</div>
				<button className={classes.dishButton}>В корзину</button>
			</div>
			<div className={classes.dishItem}>
				<div className={classes.imageBlock}>
					<img
						src="https://storage.yandexcloud.net/static-prod-resultrest/goods/images/cbf99003-f07c-481d-a747-bda8a12d1dd4-400.jpg"
						alt="Dish"
					/>
				</div>
				<div className={classes.descriptionBlock}>
					<a href="#" className={classes.name}>
						Комбо номер 1
					</a>
					<hr />
					<div className={classes.description}>
						<p className={classes.weight}>806 г.</p>
						<p className={classes.price}>539 ₽</p>
					</div>
				</div>
				<button className={classes.dishButton}>В корзину</button>
			</div>
		</div>
	);
}
