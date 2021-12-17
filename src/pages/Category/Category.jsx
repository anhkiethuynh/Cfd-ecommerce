import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import WrapTitleView from "../../components/WrapTitleView/WrapTitleView";
import WrapCheckRadio from "../../components/WrapCheckRadio/WrapCheckRadio";
import LinkToPage from "../../components/LinkToPage/LinkToPage";
import WrapComponentFilter from "./components/WrapComponentFilter";
import "./category.scss";

function Category() {
  return (
    <div className="category">
      <LinkToPage />
      <WrapTitleView />
      <WrapCheckRadio />
      <div className="category__wrap">
        <div className="wrapFilter">
          <WrapComponentFilter />
        </div>
        <div className="wrapProduct"></div>
      </div>
    </div>
  );
}

export default Category;
