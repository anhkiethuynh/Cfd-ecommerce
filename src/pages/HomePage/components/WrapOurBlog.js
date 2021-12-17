import React from "react";
import "./WrapOurBlog.scss";
// import ItemBlog from "../../../components/ItemBlog/ItemBlog";
import ItemBlog from "../../../components/ItemBlog/ItemBlog";
import { IconArrowRight } from "../../../components/Icons/icon";

function WrapOurBlog() {
  const listBlog = [
    {
      id: 1,
      titleBlog: "Salat is kinda good start to your morning routines",
      authorBlog: "Juliet",
      dayBlog: "41.32.4222",
      widthImg: "small",
      display: "none",
      displayAvt: "none",
      widthTitle: "left",
      displayBlog: "flex",
    },
    {
      id: 2,
      titleBlog: "Salat is kinda good start to your morning routines",
      authorBlog: "Sam",
      dayBlog: "41.32.1222",
      widthImg: "small",
      display: "none",
      displayAvt: "none",
      widthTitle: "left",
      displayBlog: "flex",
    },
    {
      id: 3,
      titleBlog: "Salat is kinda good start to your morning routines",
      authorBlog: "Maria",
      dayBlog: "41.32.1222",
      widthImg: "small",
      display: "none",
      displayAvt: "none",
      widthTitle: "left",
      displayBlog: "flex",
    },
  ];
  let callBlog = listBlog.map((item, index) => {
    return (
      <>
        <ItemBlog
          titleBlog={item.titleBlog}
          authorBlog={item.authorBlog}
          dayBlog={item.dayBlog}
          widthImg={item.widthImg}
          display={item.display}
          displayAvt={item.displayAvt}
          widthTitle={item.widthTitle}
          displayBlog={item.displayBlog}
        />
      </>
    );
  });

  return (
    <div className="wrapcontent">
      <div className="wrapcontent__title">
        <h3>Our cusstomer say</h3>
        <div className="gotoBog">
          <h3>Go to blog</h3>
          <IconArrowRight />
        </div>
      </div>

      <div className="wrapourblog">
        <ItemBlog
          tagname="vegetable"
          titleBlog="Our chef tips for a great and tasty dinner ready in 20 minutes"
          authorBlog="Alex"
          dayBlog="12.12.1111"
          //  type="default"
        />

        <ItemBlog
          tagname="vegetable"
          titleBlog="Which vegetable your family will love and want’s eat each day"
          authorBlog="Jack"
          dayBlog="12.12.1111"
          type="down"
          widthImg="midle"
          widthTitle="midle"
          displayAvt="none"
        />
        {/* 
   <ItemBlog 
    widthImg="small"
   display="none"
    titleBlog="Our chef tips for a great and tasty dinner ready in 20 minutes"
     authorBlog="Alex"
     dayBlog="12.12.1111" */}
        <div className="wrapourblog__rigt"> {callBlog}</div>
      </div>
    </div>
  );
}

export default WrapOurBlog;
