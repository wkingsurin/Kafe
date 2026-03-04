import { useState } from "react";
import { preventScrollJump } from "../../utils";

export default function useOverlay(initialValue) {
	const [state, setState] = useState(initialValue);

	const onShowOverlay = (content, contentData) => {
		preventScrollJump("add");
		setContent(content, contentData);
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

	const setContent = (content, contentData) => {
		setState((o) => ({ ...o, content: content, contentData }));
	};
	const clearContent = () => {
		setState((o) => ({
			...o,
			content: null,
			contentData: {
				imgURL: null,
				name: null,
				wieght: null,
				description: null,
				price: null,
			},
		}));
	};

	return { overlay: state, onShowOverlay, onHideOverlay };
}
