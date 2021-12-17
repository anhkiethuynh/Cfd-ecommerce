import React from "react";
import { Link } from "react-router-dom";
import "./WrapPro.scss";

function WrapPro({
  titleProduct,
  itemProduct1,
  itemProduct2,
  itemProduct3,
  itemProduct4,
  itemProduct5,
}) {
  return (
    <div className="wrappro">
      <h3>{titleProduct}</h3>
      <ol>
        <li>
          {/* <Link to="category">{itemProduct1}</Link> */}
          <a href="category">{itemProduct1}</a>
        </li>
        <li>
          <a href="#">{itemProduct2}</a>
        </li>
        <li>
          <a href="#">{itemProduct3}</a>
        </li>
        <li>
          <a href="#">{itemProduct4}</a>
        </li>
        <li>
          <a href="#">{itemProduct5}</a>
        </li>
      </ol>
    </div>
  );
}

export default WrapPro;
