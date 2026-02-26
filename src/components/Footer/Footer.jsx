import classes from "./Footer.module.css";

import Logo from "../ui/Logo";
import CallComponent from "../ui/CallComponent";

export default function Footer() {
	return (
		<footer className={classes.footer}>
			<div className="container">
				<div className={classes.footerBlock}>
					<Logo
						imageUrl="https://storage.yandexcloud.net/static-prod-resultrest/companies/59/templates/logos/5d774853-e808-4c9b-b7f0-93aa5184546f.png"
						name="Сели и поели"
					/>
					<CallComponent phone="+7 (343) 123-45-67" text="Сделать заказ" />
				</div>
			</div>
		</footer>
	);
}
