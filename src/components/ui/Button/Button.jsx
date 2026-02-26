import classes from "./Button.module.css";

export default function Button({ className, children }) {
	return <button className={classes[className]}>{children}</button>;
}
