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
					<HeroImage
						imageUrl={
							"https://storage.yandexcloud.net/static-prod-resultrest/branches/101/slides/e47da74c-351d-4641-8c67-d66b926aa5d8.webp"
						}
						name="Hero image"
					></HeroImage>
					<Carousel></Carousel>
				</div>
			</div>
		</section>
	);
}
