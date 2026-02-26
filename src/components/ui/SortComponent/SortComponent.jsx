import classes from "./SortComponent.module.css";

export default function SortComponent({ options }) {
	return (
		<div className={classes.sortBlock}>
			<span>сортировать по:</span>
			<select name="sort-list" id="sort-list" className={classes.sortList}>
				{options.map((option) => (
					<option value={option.value}>{option.children}</option>
				))}
			</select>
		</div>
	);
}
