import classes from "./App.module.css";
import AccountSVG from "../ui/AccountSVG";
import ArrowSVG from "../ui/ArrowSVG";

export default function App() {
	return (
		<div className={classes.app}>
			<header className={classes.header}>
				<div className={classes.container}>
					<div className={classes.headerBlock}>
						<div className={classes.block}>
							<div className={classes.logo}>
								<img
									src="https://storage.yandexcloud.net/static-prod-resultrest/companies/59/templates/logos/5d774853-e808-4c9b-b7f0-93aa5184546f.png"
									alt="Logo"
								/>
							</div>
							<a href="tel:12345678910" className={classes.orderBlock}>
								<p className={classes.phone}>+7 (343) 123-45-67</p>
								<p className={classes.text}>Сделать заказ</p>
							</a>
						</div>
						<div className={classes.block}>
							<button className={classes.account}>
								<AccountSVG />
							</button>
							<button className={classes.cart}>Корзина</button>
						</div>
					</div>
				</div>
			</header>
			<main className={classes.main}>
				<section className={classes.hero}>
					<div className={classes.container}>
						<div className={classes.heroBlock}>
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
							<div className={classes.heroImage}>
								<img
									src="https://storage.yandexcloud.net/static-prod-resultrest/branches/101/slides/e47da74c-351d-4641-8c67-d66b926aa5d8.webp"
									alt="HeroImage"
								/>
							</div>
							<div className={classes.carouselBlock}>
								<h2 className={classes.title}>Популярное</h2>
								<div className={classes.carousel}>
									<div className={classes.images}>
										<div className={classes.item}>
											<div className={classes.imageBlock}>
												<img
													src="https://storage.yandexcloud.net/static-prod-resultrest/goods/images/cbf99003-f07c-481d-a747-bda8a12d1dd4-400.jpg"
													alt="Комбо номер 1"
												/>
											</div>
											<a href="#" className={classes.overlay}>
												Комбо номер 1
											</a>
										</div>
										<div className={classes.item}>
											<div className={classes.imageBlock}>
												<img
													src="https://storage.yandexcloud.net/static-prod-resultrest/goods/images/81cf8a75-34cb-4e55-91a7-bb0e4719a2db-400.jpg"
													alt="Комбо номер 2"
												/>
											</div>
											<a href="#" className={classes.overlay}>
												Комбо номер 2
											</a>
										</div>
										<div className={classes.item}>
											<div className={classes.imageBlock}>
												<img
													src="https://storage.yandexcloud.net/static-prod-resultrest/goods/images/8c4a4a73-d427-43f2-8894-f5aba20c918a-400.jpg"
													alt="Комбо номер 3"
												/>
											</div>
											<a href="#" className={classes.overlay}>
												Комбо номер 3
											</a>
										</div>
										<div className={classes.item}>
											<div className={classes.imageBlock}>
												<img
													src="https://storage.yandexcloud.net/static-prod-resultrest/goods/2f0dc77c-2ad4-48f0-8a56-811ed040f101/images/2625ad13-9bf3-40c4-b2e0-7ae0a32bd272-400.jpg"
													alt="Килограмм шашлыка из 100% фермерской свиной шейки"
												/>
											</div>
											<a href="#" className={classes.overlay}>
												Килограмм шашлыка из 100% фермерской свиной шейки
											</a>
										</div>
										<div className={classes.item}>
											<div className={classes.imageBlock}>
												<img
													src="https://storage.yandexcloud.net/static-prod-resultrest/goods/b4e4141e-2018-4827-a3d0-60b624463ef1/images/b71209c8-0acc-43df-a8f0-6605a9fb7c50-400.jpg"
													alt="Шашлык из филе куриного бедра"
												/>
											</div>
											<a herf="#" className={classes.overlay}>
												Шашлык из филе куриного бедра
											</a>
										</div>
									</div>
									<button className={classes.button}>
										<ArrowSVG side="left" />
									</button>
									<button className={classes.button}>
										<ArrowSVG />
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className={classes.content} id="combo">
					<div className={classes.container}>
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
				<footer className={classes.footer}>
					<div className={classes.container}>
						<div className={classes.footerBlock}>
							<div className={classes.logo}>
								<img
									src="https://storage.yandexcloud.net/static-prod-resultrest/companies/59/templates/logos/5d774853-e808-4c9b-b7f0-93aa5184546f.png"
									alt="Logo"
								/>
							</div>
							<a href="tel:12345678910" className={classes.orderBlock}>
								<p className={classes.phone}>+7 (343) 123-45-67</p>
								<p className={classes.text}>Сделать заказ</p>
							</a>
						</div>
					</div>
				</footer>
			</main>
		</div>
	);
}
