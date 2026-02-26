import classes from "./ContentSection.module.css";

export default function ContentSection({ className, id }) {
	return (
		<section className={classes[className]} id={id}>
			<div className="container">
				<div className={classes.contentBlock}>
					<div className={classes.titleBlock}>
						<h2 className={classes.title}>Комбо-наборы</h2>
						<div className={classes.sortBlock}>
							<span>сортировать по:</span>
							<select
								name="sort-list"
								id="sort-list"
								className={classes.sortList}
							>
								<option value="вес">весу</option>
								<option value="цена">цене</option>
							</select>
						</div>
					</div>
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
					<button className={classes.contentButton}>Показать все</button>
				</div>
			</div>
		</section>
	);
}
