import classes from "./Main.module.css";

import { useState } from "react";

import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";

import data from "../../data.json";
import CategoriesList from "./components/CategoriesList";
import Profile from "./components/Profile";

export default function Main() {
	const [mainTab, setMainTab] = useState("profile");
	const dishesData = data;

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
					></CategoriesList>
				</div>
			</section>
			<Profile></Profile>
		</>
	);

	return (
		<main className={classes.main}>
			{mainTab === "main" && main}
			{mainTab === "profile" && profile}
		</main>
	);
}
