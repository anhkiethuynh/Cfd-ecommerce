import React from "react";
import CustomerSay from "./CustomerSay";
import "./CustomerSayWrap.scss";
import { IconArrowRight } from "../Icons/icon";

function CustomerSayWrap() {
  const listQuote = [
    {
      id: 1,
      quote:
        "“ This is an super space for your customers qoute.Don’t worry it works smooth as pie.You will get all what you need by writiing a text here “",
      nameCus: "About Us",
    },
    {
      id: 2,
      quote:
        "“ This is an super space for your customers qoute.Don’t worry it works smooth as pie.You will get all what you need by writiing a text here “",
      nameCus: "About Us",
    },
    {
      id: 3,
      quote:
        "“ This is an super space for your customers qoute.Don’t worry it works smooth as pie.You will get all what you need by writiing a text here “",
      nameCus: "About Us",
    },
    {
      id: 4,
      quote:
        "“ This is an super space for your customers qoute.Don’t worry it works smooth as pie.You will get all what you need by writiing a text here “",
      nameCus: "About Us",
    },
  ];
  let callQuote = listQuote.map((item, index) => {
    return <CustomerSay quote={item.quote} nameCus={item.nameCus} />;
  });
  return (
    <div className="CustomerSayWrap">
      <div className="container-fluid">
        <div className="title">
          <h3>Our cusstomer say</h3>
          <div className="gotoBog">
            <h3>Go to blog</h3>
            <IconArrowRight />
          </div>
        </div>
      </div>

      <div className="wrapquote"> {callQuote}</div>
    </div>
  );
}

export default CustomerSayWrap;
