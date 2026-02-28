import classes from "./Overlay.module.css";

export default function Overlay({ open, onClick, children }) {
	return open ? (
		<div
			className={classes.overlay}
			style={{ paddingTop: "250px" }}
			onClick={(e) => {
				e.stopPropagation();
				onClick();
			}}
		>
			{children}
		</div>
	) : (
		<></>
	);
}
