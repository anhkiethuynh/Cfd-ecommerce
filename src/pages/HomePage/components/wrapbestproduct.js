import React from "react";
// import WrapCard from "../../components/WrapCard/wrapcard"
import WrapCard from "../../../components/WrapCard/wrapcard";
import WrapProduct from "../../../components/WrapProduct/wrapproduct";
import Card from "../../../components/Card/card";
import "./wrapbestproduct.scss";

function BestProduct() {
  const listCardBest = [
    {
      id: 1,
      cardTitle: "product4",
      cardDes: "Space for a small product description ",
      cardPrice: "100",
      type: "small",
    },
    {
      id: 2,
      cardTitle: "product4",
      cardDes: "Space for a small product description ",
      cardPrice: "100",
      type: "small",
      tagname: "-10%",
      discount: "1055",
    },
    {
      id: 3,
      cardTitle: "product4",
      cardDes: "Space for a small product description ",
      cardPrice: "100",
      type: "small",
    },
  ];
  let callListCard = listCardBest.map((item, index) => {
    return (
      <Card
        cardTitle={item.cardTitle}
        cardDes={item.cardDes}
        cardPrice={item.cardPrice}
        type={item.cardType}
        tagname={item.tagname}
        discount={item.discount}
      />
    );
  });
  return (
    <div className="wrapcontentcard">
      <div className="wrapcontentcard__left">
        <WrapProduct
          titleProduct="Best selling product"
          itemProduct1="Kitchen"
          itemProduct2="Meat and fish"
          itemProduct3="Special nutrition"
          itemProduct4="Pharmacy"
          itemProduct5="Baby"
          heighTag="small"
          display="none"
        />
      </div>
      <div className="wrapcontentcard__right">
        {callListCard}
        {/* <Card
          cardTitle="product4"
          cardDes="Space for a small product description "
          cardPrice="100"
          type="small"
        />
        <Card
          cardTitle="product5"
          cardDes="Space for a small product description "
          // display="none"
          cardPrice="100"
          tagname="-10%"
          discount="1055"
          type="small"
        />
        <Card
          cardTitle="product6"
          cardDes="Space for a small product description "
          cardPrice="100"
          tagname="-10%"
        /> */}
      </div>
    </div>
  );
}

export default BestProduct;
