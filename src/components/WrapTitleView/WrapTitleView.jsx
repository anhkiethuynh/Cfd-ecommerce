import React from "react";
import "./WrapTitleView.scss";
import { IconGridView, IconListView } from "../Icons/icon";
import Tag from "../Tags/tag";

function WrapTitleView() {
  return (
    <div className="container-fluid">
      <div className="wraptitleview">
        <h3>Fruit and vegetables</h3>
        <div className="wraptitleview__icon">
          <div className="gridview">
            <IconGridView />
            <p>Grid view</p>
          </div>
          <div className="listview">
            <IconListView />
            <p>Listview</p>
          </div>
          <div className="quantityproduct">
            <Tag type="small" tagname="180" />
            <p>product</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WrapTitleView;
