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
						<Logo />
						<CallComponent />
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
