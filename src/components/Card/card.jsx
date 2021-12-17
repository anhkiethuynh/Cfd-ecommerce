import React from "react";
import "./card.scss";
import BtnEmtyBack from "../Button/BtnEmtyBack";
import Tag from "../Tags/tag";
// function card() {
//     return (
//         <div className="card">
//            <div className="card__image">
//             </div>
//             <div className="card__info">
//                 <p>Product Title</p>
//                 <p>Space for a small product description </p>
//                 <div className="price">
//                      <h3>145 USD</h3>
//                      <BtnBuyNow/>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default card
function card({ cardTitle, cardDes, cardPrice, display, tagname, discount }) {
  return (
    <div className="card">
      <div className="card__image">
        <div className="displaytag">
          <Tag display={display} type="small" tagname={tagname} />
        </div>
      </div>
      <div className="card__info">
        <p className="title">{cardTitle}</p>
        <p className="des">{cardDes}</p>
        <div className="price">
          <div className="price__info">
            <h3>{cardPrice}</h3>
            <p>{discount}</p>
          </div>

          <BtnEmtyBack color="green" size="small" colorborder="boldgreen">
            Buy now
          </BtnEmtyBack>
        </div>
      </div>
    </div>
  );
}

export default card;
