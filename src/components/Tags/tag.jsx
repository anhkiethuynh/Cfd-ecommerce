import classnames from "classnames";
import React from "react";
import "../../components/Tags/tag.scss";

function Tag({
  tagname,
  type = "default",
  display = "default",
  color = "default",
  background = "default",
  icon,
  heighTag = "default",
  tagmargin,
}) {
  return (
    <div className={classnames("tag", `heighTag-${heighTag}`)}>
      <ol>
        <li className={classnames(`tagmargin-${tagmargin}`)}>
          <a href="#">
            <div
              className={classnames(
                "btntag",
                `type-${type}`,
                `display-${display}`,
                `color-${color}`,
                `background-${background}`
              )}
            >
              {tagname}
              {icon}
            </div>
          </a>
        </li>
      </ol>
    </div>
  );
}

export default Tag;
