import classes from "./Profile.module.css";

import Title from "../../ui/Title";

export default function Profile() {
	return (
		<section className={classes.profile}>
			<div className="container">
				<div className={classes.profileBlock}>
					<Title>Профиль</Title>
					<div className={classes.content}>
						<div className={classes.col}>
							<Title styles={{ fontSize: "20px", fontWeight: "700px" }}>
								Данные
							</Title>
							<div className={classes.colContent}>
								<div className={classes.textBlock}>
									<span className={classes.property}>Имя:</span>
									<div className={classes.valueBlock}>
										<p className={classes.value}>Даниил</p>
										<span className={classes.edit}>Изменить</span>
									</div>
								</div>
								<div className={classes.textBlock}>
									<span className={classes.property}>Почта:</span>
									<div className={classes.valueBlock}>
										<p className={classes.value}>code8d@gmail.com</p>
										<span className={classes.edit}>Изменить</span>
									</div>
								</div>
								<div className={classes.textBlock}>
									<span className={classes.property}>Номер телефона:</span>
									<div className={classes.valueBlock}>
										<p className={classes.value}>+7 922 20 84 929</p>
										<span className={classes.edit}>Изменить</span>
									</div>
								</div>
								<div className={classes.textBlock}>
									<span className={classes.property}>Адрес:</span>
									<div className={classes.valueBlock}>
										<p className={classes.value}>
											г. Богданович. ул. Октябрьская д. 16 кв. 21
										</p>
										<span className={classes.edit}>Изменить</span>
									</div>
								</div>
							</div>
						</div>
						<div className={classes.col}>
							<Title styles={{ fontSize: "20px", fontWeight: "700px" }}>
								Безопасность
							</Title>
							<div className={classes.colContent}>
								<div className={classes.textBlock}>
									<span className={`${classes.property} ${classes.security}`}>
										Изменить пароль
									</span>
								</div>
								<div className={classes.textBlock}>
									<span
										className={`${classes.property} ${classes.security} ${classes.pass}`}
									>
										Выйти
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
