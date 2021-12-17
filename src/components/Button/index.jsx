import classNames from "classnames";
import "./style.scss";
/* 
    color = { bright, simple , stroke, colored }
    size = { small, medium, large }
    icon = { component}
    type = { default, icon-left, icon-right}
*/
export const Button = ({
	children,
	size = "small",
	color = "colored",
	type = "default",
	round = false,
	icon,
}) => {
	return (
		<button
			className={classNames(
				"button",
				`color-${color}`,
				`size-${size}`,
				`type-${type}`,
				{ round }
			)}
		>
			{type === "icon-left" && icon}
			{children}
			{type === "icon-right" && icon}
		</button>
	);
};
