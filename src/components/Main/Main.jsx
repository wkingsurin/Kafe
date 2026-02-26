import classes from "./Main.module.css";

import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";

import data from "../../data.json";

export default function Main() {
	const dishesData = data;

	return (
		<main className={classes.main}>
			<HeroSection></HeroSection>
			{dishesData.map((category) => (
				<ContentSection id="combo" category={category}></ContentSection>
			))}
		</main>
	);
}
