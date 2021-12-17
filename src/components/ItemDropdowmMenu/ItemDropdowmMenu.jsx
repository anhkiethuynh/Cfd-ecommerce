import React from "react";
import "./ItemDropdowmMenu.scss";
import { IconArrowDown } from "../Icons/icon";
import { Link } from "react-router-dom";

function ItemDropdowmMenu({ nameItem }) {
  return (
    <div className="ItemDropdowmMenu">
      <Link to="/category">
        <h4>{nameItem}</h4>
      </Link>

      <IconArrowDown />
    </div>
  );
}

export default ItemDropdowmMenu;
