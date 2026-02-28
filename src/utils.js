export const preventScrollJump = (condition) => {
	const documentWidth = window.innerWidth;
	const bodyWidth = window.document.body.clientWidth;
	const scrollWidth = documentWidth - bodyWidth;

	switch (condition) {
		case "load": {
			window.document.body.style.overflowX = "hidden";
			window.document.body.style.width = documentWidth + "px";
			break;
		}
		case "add": {
			window.document.body.style.overflow = "hidden";
			window.document.body.style.width = documentWidth + "px";
			break;
		}
		case "remove": {
			window.document.body.style.overflowX = "hidden";
			window.document.body.style.overflowY = "scroll";
			window.document.body.style.width = bodyWidth - scrollWidth + "px";
			break;
		}
		default: {
			break;
		}
	}
};
