import classes from "./App.module.css";
import ArrowSVG from "../ui/ArrowSVG";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

export default function App() {
	return (
		<div className={classes.app}>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
