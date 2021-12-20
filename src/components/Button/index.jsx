import classNames from "classnames";
import "./style.scss";
/* 
    color = { bright, simple , stroke, colored }
    size = { small, medium, large }
    icon = { component}
    type = { default, icon-left, icon-right}
*/
function Button({
	children,
	size = "small",
	color = "colored",
	type = "default",
	round = false,
	className = "",
	icon,
}) {
	return (
		<button
			className={classNames(
				"button",
				`button-${color}`,
				`button-${size}`,
				`button-${type}`,
				{ round },
				className
			)}
		>
			{type === "icon-left" && icon}
			{children}
			{type === "icon-right" && icon}
		</button>
	);
}

export default Button;
