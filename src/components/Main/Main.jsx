import classes from "./Main.module.css";

import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";

export default function Main() {
	return (
		<main className={classes.main}>
			<HeroSection></HeroSection>
			<ContentSection id="combo"></ContentSection>
		</main>
	);
}
