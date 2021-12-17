import React from "react";
import Tag from "../Tags/tag";
import "./ItemBlog.scss";
import classnames from "classnames";

function ItemBlog({
  tagname,
  display,
  titleBlog,
  authorBlog,
  dayBlog,
  type = "default",
  widthImg = "default",
  widthTitle = "default",
  displayAvt = "default",
  displayBlog = "default",
}) {
  return (
    <div className={classnames("itemblog", `displayBlog-${displayBlog}`)}>
      <div
        className={classnames("itemblog__img", `widthImg-${widthImg}`)}
      ></div>
      <div className={classnames("itemblog__tag", `type-${type}`)}>
        <Tag display={display} type="small" tagname={tagname} />
      </div>
      <div className={classnames("itemblog__inf", `widthTitle-${widthTitle}`)}>
        <h3>{titleBlog}</h3>
        <div className="author">
          <div
            className={classnames("author__img", `displayAvt-${displayAvt}`)}
          ></div>
          <p className="nameAu">{authorBlog}</p>
          <p>{dayBlog}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemBlog;
