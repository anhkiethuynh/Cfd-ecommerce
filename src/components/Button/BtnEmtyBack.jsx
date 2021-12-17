import classnames from "classnames";
import "./BtnEmtyBack.scss";

const BtnEmtyBack = ({
  children,
  color = "none",
  size = "small",
  type = "default",
  round = false,
  colorborder = "default",
  padding = "default",
  icon,
  displayBtn,
}) => {
  return (
    <button
      className={classnames(
        "btnButton",
        `color-${color}`,
        `size-${size}`,
        `type-${type}`,
        `colorborder-${colorborder}`,
        `padding-${padding}`,
        `displayBtn-${displayBtn}`,

        { round }
      )}
    >
      {type === "icon-left" && icon}
      <p> {children}</p>
      {type === "icon-right" && icon}
    </button>
  );
};
export default BtnEmtyBack;
