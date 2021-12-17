import React from "react";
import BtnEmtyBack from "../../../components/Button/BtnEmtyBack";
import {IconArrowRight} from "../../../components/Icons/icon";
import "./banner.scss"


function banner({ nameBanner, titleBanner }) {
  return (
    <div className="banner">
      <p className="nameBaner">{nameBanner}</p>
      <h3>{titleBanner}</h3>
      <BtnEmtyBack  size="large" type="icon-right" icon={<IconArrowRight/>} colorborder="green" >
   Read recepies
      </BtnEmtyBack>
    </div>
  );
}

export default banner;
