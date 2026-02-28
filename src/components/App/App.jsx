import classes from "./App.module.css";
import ArrowSVG from "../ui/ArrowSVG";

import { useEffect } from "react";
import useOverlay from "../../hooks/useOverlay";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import Overlay from "../ui/Overlay";
import LoginModal from "../LoginModal";

import { preventScrollJump } from "../../utils";

export default function App() {
	const { overlay, onShowOverlay, onHideOverlay } = useOverlay({
		content: null,
		open: false,
	});

	useEffect(() => {
		preventScrollJump("load");
	}, []);

	return (
		<div className={classes.app} onClick={onShowOverlay}>
			<Header />
			<Main />
			<Footer />
			<Overlay open={overlay.open} onClick={onHideOverlay}>
				<LoginModal></LoginModal>
			</Overlay>
		</div>
	);
}
