import classnames from "classnames";
import "./Radio.scss";
// import Visa from "../../assets/img/Visa.png";
import Tag from "../Tags/tag";
const Radio = ({
  children,
  type,
  borderButton = "default",
  text1,
  text2,
  icon1,
  icon2,
  display = "default",
  tagname,
  color = "default",
  background = "default",
}) => {
  return (
    <div className={classnames("Radio", `borderButton-${borderButton}`)}>
      <div className="radioInput">
        <input type={type} />
        <label>{children}</label>
      </div>

      <div className="textCenter">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
      <div className="iconBtn">
        {icon1}
        {icon2}
      </div>
      <div className="tag">
        <Tag
          background={background}
          color={color}
          display={display}
          type="small"
          tagname={tagname}
        />
      </div>
    </div>
  );
};
export default Radio;
