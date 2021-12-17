import React from "react";
import "./WrapCheckRadio.scss";
import Radio from "../Button/Radio";
import { IconX } from "../Icons/icon";
import Tag from "../Tags/tag";

function WrapCheckRadio() {
  return (
    <div className="container-fluid">
      <div className="wrapcheck">
        <div className="wrapcheck__radio">
          <Radio
            borderButton="none"
            type="radio"
            children="Filter text"
            tagname="nbs"
            display="none"
          />
          <Radio
            borderButton="none"
            type="radio"
            children="Filter text"
            tagname="nbs"
            display="none"
          />
        </div>
        <div className="wrapcheck__checkbox">
          <Radio
            borderButton="default"
            type="checkbox"
            children="Filter text"
            tagname="nbs"
            display="default"
            color="black"
            background="none"
          />
          <Radio
            borderButton="default"
            type="checkbox"
            children="Filter text"
            tagname="nbs"
            display="default"
            color="black"
            background="none"
          />
        </div>
      </div>{" "}
      <div className="taghistory">
        <p>Apply fillter:</p>
        <Tag
          display="default"
          type="small"
          tagname="selected samll"
          icon={<IconX />}
        />
        <Tag
          display="default"
          type="small"
          tagname="selected samll"
          icon={<IconX />}
        />
      </div>
    </div>
  );
}

export default WrapCheckRadio;
