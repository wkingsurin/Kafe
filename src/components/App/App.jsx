import classes from "./App.module.css";
import AccountSVG from "../ui/AccountSVG";

export default function App() {
	return (
		<div className={classes.app}>
			<header className={classes.header}>
				<div className={classes.container}>
					<div className={classes.headerBlock}>
						<div className={classes.block}>
							<div className={classes.logo}>
								<img
									src="https://storage.yandexcloud.net/static-prod-resultrest/companies/59/templates/logos/5d774853-e808-4c9b-b7f0-93aa5184546f.png"
									alt="Logo"
								/>
							</div>
							<a href="tel:12345678910" className={classes.orderBlock}>
								<p className={classes.phone}>+7 (343) 123-45-67</p>
								<p className={classes.text}>Сделать заказ</p>
							</a>
						</div>
						<div className={classes.block}>
							<button className={classes.account}>
								<AccountSVG />
							</button>
							<button className={classes.cart}>Корзина</button>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}
