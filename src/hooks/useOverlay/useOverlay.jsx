import { useState } from "react";
import { preventScrollJump } from "../../utils";

export default function useOverlay(initialValue) {
	const [state, setState] = useState(initialValue);

	const onShowOverlay = () => {
		preventScrollJump("add");
		openOverlay();
	};

	const onHideOverlay = () => {
		preventScrollJump("remove");
		closeOverlay();
	};

	const openOverlay = () => {
		setState((o) => ({ ...o, open: true }));
	};
	const closeOverlay = () => {
		setState((o) => ({ ...o, open: false }));
	};

	return { overlay: state, onShowOverlay, onHideOverlay };
}
