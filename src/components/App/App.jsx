import classes from "./App.module.css";

import { useState, useEffect } from "react";
import useOverlay from "../../hooks/useOverlay";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import Overlay from "../ui/Overlay";
import LoginModal from "../LoginModal";
import DishModal from "../DishModal";

import { OverlayContext } from "../../contexts/OverlayContext";

import { preventScrollJump } from "../../utils";
import data from "../../data.json";

export default function App() {
	const { overlay, onShowOverlay, onHideOverlay } = useOverlay({
		content: "dishModal",
		open: false,
		contentData: {
			name: null,
			imageURL: null,
			weight: null,
			description: null,
			price: null,
		},
	});

	const [mainTab, setMainTab] = useState("basket");
	const dishesData = data;

	const onSwitchTab = (tabName) => {
		setMainTab(() => tabName);
	};

	useEffect(() => {
		preventScrollJump("load");
	}, []);

	return (
		<div className={classes.app}>
			<OverlayContext.Provider
				value={{ overlay, onShowOverlay, onHideOverlay }}
			>
				<Header onShowOverlay={onShowOverlay} onSwitchTab={onSwitchTab} />
				<Main
					mainTab={mainTab}
					onSwitchTab={onSwitchTab}
					dishesData={dishesData}
				/>
				<Footer />
			</OverlayContext.Provider>
			<Overlay open={overlay.open} onClick={onHideOverlay}>
				{overlay.content === "dishModal" && (
					<DishModal
						imgURL={overlay?.contentData?.imageURL}
						name={overlay?.contentData?.name}
						weight={overlay?.contentData?.weight}
						description={overlay?.contentData?.description}
						price={overlay?.contentData?.price}
					></DishModal>
				)}
				{overlay.content === "signModal" && <LoginModal></LoginModal>}
			</Overlay>
		</div>
	);
}
