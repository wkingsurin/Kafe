import classes from "./Main.module.css";

import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";

import CategoriesList from "./components/CategoriesList";
import Profile from "./components/Profile";
import Basket from "./components/Basket";

export default function Main({ mainTab, dishesData, onSwitchTab }) {
	const main = (
		<>
			<HeroSection></HeroSection>
			{dishesData.map((category) => (
				<ContentSection
					key={category.category}
					id={category.id}
					category={category}
				></ContentSection>
			))}
		</>
	);
	const profile = (
		<>
			<section className={classes.categoryList}>
				<div className="container">
					<CategoriesList
						options={{ type: "profile", list: ["Главная", "Профиль"] }}
						onSwitchTab={onSwitchTab}
					></CategoriesList>
				</div>
			</section>
			<Profile></Profile>
		</>
	);
	const basket = (
		<>
			<section className={classes.categoryList}>
				<div className="container">
					<CategoriesList
						options={{ type: "profile", list: ["Главная", "Корзина"] }}
						onSwitchTab={onSwitchTab}
					></CategoriesList>
				</div>
			</section>
			<Basket></Basket>
		</>
	);

	return (
		<main className={classes.main}>
			{mainTab === "main" && main}
			{mainTab === "profile" && profile}
			{mainTab === "basket" && basket}
		</main>
	);
}
