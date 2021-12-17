import React from 'react'
import Card from "../Card/card"
import "./wrapcard.scss"
   const listCard = [
    { id: 1, cardTitle: "product1",cardDes:"pro1" ,cardPrice:'123USD'},
    { id: 2, cardTitle: "product2",cardDes:"pro2",cardPrice:'12USD' },
       { id: 3, cardTitle: "product3",cardDes:"pro3",cardPrice:'1USD' },

  ];


    let cardPro = listCard.map((item, index) => {
    return <Card cardTitle={item.cardTitle} cardDes={item.cardDes} cardPrice={item.cardPrice} />;
  });
 


function wrapcard() {
    return (
        <div className="wrapcard">
        {cardPro}

        </div>
    )
}

export default wrapcard
