import classes from "./HeroSection.module.css";

import CategoriesList from "./CategoriesList";
import HeroImage from "./HeroImage";
import Carousel from "./Carousel";

export default function HeroSection() {
	return (
		<section className={classes.hero} id="hero">
			<div className="container">
				<div className={classes.heroBlock}>
					<CategoriesList></CategoriesList>
					<HeroImage></HeroImage>
					<Carousel></Carousel>
				</div>
			</div>
		</section>
	);
}
