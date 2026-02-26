import classes from "./HeroImage.module.css";

export default function HeroImage() {
	return (
		<div className={classes.heroImage}>
			<img
				src="https://storage.yandexcloud.net/static-prod-resultrest/branches/101/slides/e47da74c-351d-4641-8c67-d66b926aa5d8.webp"
				alt="HeroImage"
			/>
		</div>
	);
}
