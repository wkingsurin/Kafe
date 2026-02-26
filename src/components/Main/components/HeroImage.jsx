import classes from "./HeroImage.module.css";

export default function HeroImage({ imageUrl, name }) {
	return (
		<div className={classes.heroImage}>
			<img src={imageUrl} alt={name} />
		</div>
	);
}
