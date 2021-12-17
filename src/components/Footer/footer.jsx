import React from "react";
import WrapPro from "./WrapPro";
import Tag from "../Tags/tag";
import "./footer.scss";

function Footer() {
  const listPro = [
    {
      id: 1,
      titleProduct: "Get in touch",
      itemProduct1: "About Us",
      itemProduct2: "Careers",
      itemProduct3: "Press Releases",
      itemProduct4: "Blog",
      itemProduct5: "",
    },
    {
      id: 2,
      titleProduct: "Connections",
      itemProduct1: "Facebook",
      itemProduct2: "Twitter",
      itemProduct3: "Instagram",
      itemProduct4: "Youtube",
      itemProduct5: "LinkedIn",
    },
    {
      id: 3,
      titleProduct: "Earnings",
      itemProduct1: "Become an Affiliate",
      itemProduct2: "Advertise your product",
      itemProduct3: "Sell on Market",
      itemProduct4: "",
      itemProduct5: "",
    },
    {
      id: 4,
      titleProduct: "Account",
      itemProduct1: "Your account",
      itemProduct2: "Returns Centre",
      itemProduct3: "100 % purchase protection",
      itemProduct4: "Chat with us",
      itemProduct5: "Help",
    },
  ];

  const listTag = [
    { id: 1, tagname: "Beans" },
    { id: 2, tagname: "Carrots" },
    { id: 3, tagname: "Apples" },
    { id: 4, tagname: "Garlic" },
    { id: 5, tagname: "Mushrooms" },
    { id: 6, tagname: "Tomatoes" },
    { id: 7, tagname: "Chilli peppers" },
    { id: 8, tagname: "Broccoli" },
    { id: 9, tagname: "Watermelons" },
    { id: 10, tagname: "Oranges" },
    { id: 11, tagname: "Bananas" },
    { id: 12, tagname: "Grapes" },
    { id: 13, tagname: "Cherries" },
    { id: 14, tagname: "Meat" },
    { id: 15, tagname: "Seo tag" },
    { id: 16, tagname: "Fish" },
    { id: 17, tagname: "Seo tag" },
    { id: 18, tagname: "BanaFresh foodnas" },
    { id: 19, tagname: "Lemons" },
  ];

  let namePro = listPro.map((item, index) => {
    return (
      <WrapPro
        titleProduct={item.titleProduct}
        itemProduct1={item.itemProduct1}
        itemProduct2={item.itemProduct2}
        itemProduct3={item.itemProduct3}
        itemProduct4={item.itemProduct4}
        itemProduct5={item.itemProduct5}
      />
    );
  });

  let tagPro = listTag.map((item, index) => {
    return <Tag tagmargin="tagmiddle" tagname={item.tagname} />;
  });

  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="footer__wrappro">{namePro}</div>
        <h3>product tags</h3>
        <div className="footer__tag">
          {tagPro}
          {/* <Tag /> */}
        </div>
        <p>Copyright © 2020 petrbilek.com</p>
      </div>
    </div>
  );
}

export default Footer;
