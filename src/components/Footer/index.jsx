import SiteMap from "components/SiteMap";
import { FooterSiteMap, productTags } from "constant/mock";
import ProductTags from "components/ProductTags";
import React from "react";
import "./style.scss";
const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="inner">
					<SiteMap data={FooterSiteMap} />
					<ProductTags dataTag={productTags} />
					<div className="copyright">
						<p>Copyright © 2020 petrbilek.com</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
