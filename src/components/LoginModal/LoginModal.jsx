import classes from "./LoginModal.module.css";

import Title from "../ui/Title";
import Button from "../ui/Button";

export default function LoginModal() {
	return (
		<form
			className={classes.loginModal}
			onClick={(e) => e.stopPropagation()}
			onSubmit={(e) => e.preventDefault()}
		>
			<Title styles={{ color: "#fff", marginBottom: "25px" }}>
				Вход в аккаунт
			</Title>
			<div className={classes.content}>
				<label htmlFor="email">
					Почта:
					<input type="email" id="email" placeholder="email@example.com" />
				</label>
				<label htmlFor="password">
					Пароль:
					<input type="password" id="password" placeholder="password" />
				</label>
				<Button
					className="dishButton"
					styles={{ width: "100%", fontWeight: "700px" }}
					type="submit"
				>
					Войти
				</Button>
			</div>
			<Button className="signButton">Зарегистрироваться</Button>
		</form>
	);
}
