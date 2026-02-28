import classes from "./Overlay.module.css";

export default function Overlay({ open, onClick }) {
	return open ? (
		<div
			className={classes.overlay}
			style={{ paddingTop: "250px" }}
			onClick={(e) => {
				e.stopPropagation();
				onClick();
			}}
		>
			<h2 onClick={(e) => e.stopPropagation(e)}>Content</h2>
		</div>
	) : (
		<></>
	);
}
