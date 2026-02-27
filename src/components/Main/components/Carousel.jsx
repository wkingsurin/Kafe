import classes from "./Carousel.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

import Title from "../../ui/Title";
import CarouselItem from "./CarouselItem";

import data from "../../../data.json";

export default function Carousel() {
	const title = "Популярное";
	const mangalData = data[1];

	return (
		<div className={classes.carouselBlock}>
			<Title>{title}</Title>
			<Swiper
				modules={[Pagination, Autoplay]}
				spaceBetween={15}
				slidesPerView={5}
				autoplay={{
					delay: 3500,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				loop={true}
				className={classes.swiper}
			>
				{mangalData.dishesList.map((dish) => (
					<SwiperSlide key={dish.name}>
						<CarouselItem
							imageUrl={dish.imageURL}
							name={dish.name}
						></CarouselItem>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
