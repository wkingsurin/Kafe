import classes from "./DishModal.module.css";

import Title from "../ui/Title";
import Button from "../ui/Button";
import MinusSVG from "../ui/MinusSVG";
import PlusSVG from "../ui/PlusSVG";

export default function DishModal(props) {
	const { imgURL, name, weight, description, price } = props;

	return (
		<div className={classes.dishModal} onClick={(e) => e.stopPropagation()}>
			<div className={classes.content}>
				<div className={classes.image}>
					<img src={imgURL} alt={name} />
				</div>
				<div className={classes.descriptionBlock}>
					<div className={classes.infoBlock}>
						<div className={classes.textBlock}>
							<div className={classes.titleBlock}>
								<Title styles={{ color: "#fff" }}>{name}</Title>
								<span className={classes.subtitle}>{weight}</span>
							</div>
							<p className={classes.description}>{description}</p>
						</div>
						<p className={classes.price}>{price}</p>
					</div>
					<div className={classes.buttonsBlock}>
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
						<Button
							className="dishButton"
							styles={{
								border: "none",
								background: "#fda340",
								color: "#fff",
								fontSize: "16px",
								fontWeight: 700,
							}}
						>
							Добавить
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
