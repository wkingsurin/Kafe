import classes from "./Header.module.css";
import AccountSVG from "../ui/AccountSVG";

import Logo from "../ui/Logo";
import CallComponent from "../ui/CallComponent";
import Button from "../ui/Button";

export default function Header() {
	return (
		<header className={classes.header}>
			<div className="container">
				<div className={classes.headerBlock}>
					<div className={classes.block}>
						<Logo
							imageUrl="https://storage.yandexcloud.net/static-prod-resultrest/companies/59/templates/logos/5d774853-e808-4c9b-b7f0-93aa5184546f.png"
							name="Сели и поели"
						/>
						<CallComponent phone="+7 (343) 123-45-67" text="Сделать заказ" />
					</div>
					<div className={classes.block}>
						<Button className="account">
							<AccountSVG />
						</Button>
						<Button className="cart">Корзина</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
