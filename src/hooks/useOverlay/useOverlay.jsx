import { useState } from "react";
import { preventScrollJump } from "../../utils";

export default function useOverlay(initialValue) {
	const [state, setState] = useState(initialValue);

	const onShowOverlay = (content) => {
		preventScrollJump("add");
		setContent(content);
		openOverlay();
	};

	const onHideOverlay = () => {
		preventScrollJump("remove");
		clearContent();
		closeOverlay();
	};

	const openOverlay = () => {
		setState((o) => ({ ...o, open: true }));
	};
	const closeOverlay = () => {
		setState((o) => ({ ...o, open: false }));
	};

	const setContent = (content) => {
		setState((o) => ({ ...o, content: content }));
	};
	const clearContent = () => {
		setState((o) => ({ ...o, content: null }));
	};

	return { overlay: state, onShowOverlay, onHideOverlay };
}
