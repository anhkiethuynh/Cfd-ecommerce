import { React, useState } from "react";
import BtnEmtyBack from "../Button/BtnEmtyBack";
import "./wrapproduct.scss";
import { IconArrowRight } from "../Icons/icon";
import Tag from "../Tags/tag";
import classnames from "classnames";

const Wrapproduct = ({
  titleProduct,
  itemProduct1,
  itemProduct2,
  itemProduct3,
  itemProduct4,
  itemProduct5,
  display = "default",
  tagname,
  heighTag = "default",
  itemColor = "default",
  displayBtn,
}) => {
  const [isOpen, setIsOpen] = useState();
  return (
    <div className="wrapproduct">
      <h3>{titleProduct}</h3>
      <ol>
        <li>
          <a href="#" className={classnames(`itemColor-${itemColor}`)}>
            {itemProduct1}
          </a>
          <Tag
            heighTag={heighTag}
            display={display}
            type="small"
            tagname={tagname}
          />
        </li>
        <li>
          <a href="#" className={classnames(`itemColor-${itemColor}`)}>
            {itemProduct2}
          </a>
          <Tag
            heighTag={heighTag}
            display={display}
            type="small"
            tagname={tagname}
          />
        </li>
        <li>
          <a href="#" className={classnames(`itemColor-${itemColor}`)}>
            {itemProduct3}
          </a>
          <Tag
            heighTag={heighTag}
            display={display}
            type="small"
            tagname={tagname}
          />
        </li>
        <li>
          <a href="#" className={classnames(`itemColor-${itemColor}`)}>
            {itemProduct4}
          </a>
          <Tag
            heighTag={heighTag}
            display={display}
            type="small"
            tagname={tagname}
          />
        </li>
        <li>
          <a href="#" className={classnames(`itemColor-${itemColor}`)}>
            {itemProduct5}
          </a>
          <Tag
            heighTag={heighTag}
            display={display}
            type="small"
            tagname={tagname}
          />
        </li>
      </ol>

      <BtnEmtyBack
        color="gray"
        size="large"
        type="icon-right"
        icon={<IconArrowRight />}
        displayBtn="none"
      >
        Read recepies
      </BtnEmtyBack>
    </div>
  );
};

export default Wrapproduct;
