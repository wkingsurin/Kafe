import classes from "./Carousel.module.css";

import ArrowSVG from "../../ui/ArrowSVG";
import Button from "../../ui/Button";
import Title from "../../ui/Title";
import CarouselItem from "./CarouselItem";

import data from "../../../data.json";

export default function Carousel() {
	const title = "Популярное";
	const mangalData = data[1];

	return (
		<div className={classes.carouselBlock}>
			<Title>{title}</Title>
			<div className={classes.carousel}>
				<div className={classes.carouselOverflow}>
					<div className={classes.images}>
						{mangalData.dishesList.map((dish) => (
							<CarouselItem
								imageUrl={dish.imageURL}
								name={dish.name}
							></CarouselItem>
						))}
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
