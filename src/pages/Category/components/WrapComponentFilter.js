import React from "react";
import "./WrapComponentFilter.scss";
import WrapProduct from "../../../components/WrapProduct/wrapproduct";

function WrapComponentFilter() {
  return (
    <div className="WrapComponentFilter">
      <div className="container-fluid">
        <WrapProduct
          titleProduct="category menu"
          itemProduct1="Bakery"
          itemProduct2="Fruit and vegetables"
          itemProduct3="Meat and fish"
          itemProduct4="Drinks"
          itemProduct5="Kitchen"
          tagname="180"
          heighTag="small"
          itemColor="black"
        />
      </div>
    </div>
  );
}

export default WrapComponentFilter;
