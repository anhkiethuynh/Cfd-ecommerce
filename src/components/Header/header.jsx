import React from "react";
import PropTypes from "prop-types";
// import img from "../../assets/img";
// import "./style.scss";
import "../../components/Header/header.scss";
import logo from "../../assets/img/Freshnesecom.png";

import { LogoMain } from "../Icons/icon";
import SearchHeader from "../SearchHeader/searchheader";
import UserAccount from "../UserAccount/useraccount";
import MiniCart from "../MiniCart/minicart";
import ItemDropdowmMenu from "../ItemDropdowmMenu/ItemDropdowmMenu";
import { Link } from "react-router-dom";

Header.propTypes = {};

function Header() {
  const listDropdownMenu = [
    { id: 1, nameItem: "bakery" },
    { id: 2, nameItem: "fruit and vegetable" },
    { id: 3, nameItem: "meat and fish" },
    { id: 4, nameItem: "srinks" },
    { id: 5, nameItem: "kitchen" },
    { id: 6, nameItem: "special nutrition" },
    { id: 7, nameItem: "baby" },
    { id: 8, nameItem: "pharma" },
  ];
  let callList = listDropdownMenu.map((item, index) => {
    return <ItemDropdowmMenu nameItem={item.nameItem} />;
  });
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="header_top">
          <div className="header_top-left">
            <p>Chat with us</p>
            <p>+420 336 775 664</p>
            <p>info@freshnesecom.com</p>
          </div>

          <div className="header_top-right">
            <p>blog</p>
            <p>about us</p>
            <p>careers</p>
          </div>
        </div>

        <div className="header_main">
          <div className="logo">
            <Link to="/">
              <LogoMain />
            </Link>
          </div>
          <SearchHeader />

          <div className="iconright">
            <UserAccount />
            <MiniCart />
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">{callList}</div>
      </div>
    </div>
  );
}

export default Header;
