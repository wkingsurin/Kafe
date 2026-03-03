import classes from "./App.module.css";
import ArrowSVG from "../ui/ArrowSVG";

import { useEffect } from "react";
import useOverlay from "../../hooks/useOverlay";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import Overlay from "../ui/Overlay";
import LoginModal from "../LoginModal";
import DishModal from "../DishModal";

import { preventScrollJump } from "../../utils";

export default function App() {
	const { overlay, onShowOverlay, onHideOverlay } = useOverlay({
		content: "dishModal",
		open: false,
	});

	useEffect(() => {
		preventScrollJump("load");
	}, []);

	return (
		<div className={classes.app} onClick={() => onShowOverlay(DishModal)}>
			<Header />
			<Main />
			<Footer />
			<Overlay open={overlay.open} onClick={onHideOverlay}>
				{overlay.content === "dishModal" && (
					<DishModal
						imgURL="https://storage.yandexcloud.net/static-prod-resultrest/goods/images/81cf8a75-34cb-4e55-91a7-bb0e4719a2db-400.jpg"
						name="Комбо номер 2"
						weight="806 г."
						description="Состав: Плов с курицей 250 гр, Борщ 250 гр, Булочка 1 шт., Лук маринованный 50 гр, Соус красный 30 гр. Морс в подарок."
						price="539 ₽"
					></DishModal>
				)}
				{overlay.content === "signModal" && <LoginModal></LoginModal>}
			</Overlay>
		</div>
	);
}
