import classes from "./Carousel.module.css";

import ArrowSVG from "../../ui/ArrowSVG";
import Button from "../../ui/Button";
import Title from "../../ui/Title";

export default function Carousel() {
	return (
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
	);
}
