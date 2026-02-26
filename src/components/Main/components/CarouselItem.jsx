import classes from "./CarouselItem.module.css";

export default function CarouselItem({ imageUrl, name }) {
	return (
		<div className={classes.item}>
			<div className={classes.imageBlock}>
				<img src={imageUrl} alt={name} />
			</div>
			<a href="#" className={classes.overlay}>
				{name}
			</a>
		</div>
	);
}
