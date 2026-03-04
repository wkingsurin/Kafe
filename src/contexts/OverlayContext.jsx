import { createContext } from "react";

export const OverlayContext = createContext({
	state: {
		content: null,
		contentData: {
			imgURL: null,
			name: null,
			weight: null,
			description: null,
			price: null,
		},
		open: false,
	},
});
