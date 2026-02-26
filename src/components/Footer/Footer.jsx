import classes from "./Footer.module.css";

import Logo from "../ui/Logo";
import CallComponent from "../ui/CallComponent";

export default function Footer() {
	return (
		<footer className={classes.footer}>
			<div className="container">
				<div className={classes.footerBlock}>
					<Logo />
					<CallComponent />
				</div>
			</div>
		</footer>
	);
}
