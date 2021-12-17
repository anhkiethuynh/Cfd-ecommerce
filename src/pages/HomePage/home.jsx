import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Banner from "./components/banner";
import WrapOurBlog from "./components/WrapOurBlog";
import WrapProduct from "../../components/WrapProduct/wrapproduct";
// import BtnMore from "../../components/Button/MoreCategory/morecategory"
import WrapBestProduct from "./components/wrapbestproduct";
import "./homepage.scss";
import BestFarmer from "./components/bestfarmer";
import CustomerSayWrap from "../../components/CustomerSay/CustomerSayWrap";

function HomePage() {
  const listBanner = [
    { id: 1, nameBanner: "red", titleBanner: "red color" },
    { id: 2, nameBanner: "blue", titleBanner: "blue color" },
  ];
  let banerPro = listBanner.map((item, index) => {
    return (
      <Banner nameBanner={item.nameBanner} titleBanner={item.titleBanner} />
    );
  });

  return (
    <div className="homepage">
      {/* <Header /> */}
      <div className="container-fluid">
        <div className="category">
          <div className="category__menu">
            <WrapProduct
              titleProduct="category menu"
              itemProduct1="Bakery"
              itemProduct2="Fruit and vegetables"
              itemProduct3="Meat and fish"
              itemProduct4="Drinks"
              itemProduct5="Kitchen"
              // tagname="180"
              heighTag="small"
              display="none"
            />
            {/* <BtnMore/> */}
          </div>
          <div className="category__banner">{banerPro}</div>
        </div>

        <div className="saleproduct">
          <WrapBestProduct />
        </div>

        <div className="farmarproduct">
          <BestFarmer />
        </div>
      </div>
      <div className="customersay">
        <CustomerSayWrap />
      </div>
      <div className="container-fluid">
        <WrapOurBlog />
      </div>
      <div className="ourblog"></div>

      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
