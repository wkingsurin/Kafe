import classes from "./HeroSection.module.css";
import ArrowSVG from "../../ui/ArrowSVG";
import Button from "../../ui/Button";
import Title from "../../ui/Title";

export default function HeroSection() {
	return (
		<section className={classes.hero} id="hero">
			<div className="container">
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
						<Title>Популярное</Title>
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
							<Button className="carouselButton">
								<ArrowSVG side="left" />
							</Button>
							<Button className="carouselButton">
								<ArrowSVG />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
