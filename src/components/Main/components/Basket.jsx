import classes from "./Basket.module.css";

import Title from "../../ui/Title";
import Button from "../../ui/Button";
import MinusSVG from "../../ui/MinusSVG";
import PlusSVG from "../../ui/PlusSVG";

export default function Basket() {
	return (
		<section className={classes.basket}>
			<div className="container">
				<div className={classes.basketBlock}>
					<Title>Корзина</Title>
					<div className={classes.content}>
						<ul className={classes.basketList}>
							<li className={classes.item}>
								<div className={classes.image}>
									<img
										src="https://storage.yandexcloud.net/static-prod-resultrest/goods/images/81cf8a75-34cb-4e55-91a7-bb0e4719a2db-400.jpg"
										alt="image"
									/>
								</div>
								<div className={classes.descriptionBlock}>
									<div className={classes.block}>
										<div className={classes.titleBlock}>
											<Title styles={{ fontSize: "20px" }}>Комбо номер 2</Title>
											<span className={classes.weight}>806 г.</span>
										</div>
										<p className={classes.description}>
											Состав: Плов с курицей 250 гр, Борщ 250 гр, Булочка 1 шт.,
											Лук маринованный 50 гр, Соус красный 30 гр. Морс в
											подарок.
										</p>
										<Button>Удалить</Button>
									</div>
									<div className={classes.priceBlock}>
										<div className={classes.counter}>
											<Button styles={{ width: "44px", height: "100%" }}>
												<MinusSVG />
											</Button>
											<input
												type="text"
												className={classes.count}
												value={1}
												name="count"
												id="count"
											/>
											<Button styles={{ width: "44px", height: "100%" }}>
												<PlusSVG />
											</Button>
										</div>
										<p className={classes.price}>539 ₽</p>
									</div>
								</div>
							</li>
						</ul>
						<div className={classes.basketTotal}>
							<Title styles={{ padding: "0 20px" }}>Ваша корзина</Title>
							<hr />
							<div className={classes.total}>
								<div className={classes.textBlock}>
									<p>Товары (2)</p>
									<span className={classes.totalPrice}>2 939 ₽</span>
								</div>
								<div className={classes.textBlock}>
									<p>Вес</p>
									<span className={classes.totalWeight}>1806 г</span>
								</div>
							</div>
							<hr />
							<Button
								className="dishButton"
								styles={{
									margin: "0 20px",
									fontWeight: "700",
									border: "none",
									background: "#fda340",
									color: "#fff",
								}}
							>
								Заказать
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
