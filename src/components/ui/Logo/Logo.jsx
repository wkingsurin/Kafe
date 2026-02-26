import classes from "./Logo.module.css";

export default function Logo() {
	return (
		<div className={classes.logo}>
			<img
				src="https://storage.yandexcloud.net/static-prod-resultrest/companies/59/templates/logos/5d774853-e808-4c9b-b7f0-93aa5184546f.png"
				alt="Logo"
			/>
		</div>
	);
}
