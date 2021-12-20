import React from "react";
import "./style.scss";
function BasicBanner({
	headline = "",
	subHeadline = "",
	button,
	backgroundImage = "/assets/img/basic-section.jpg",
}) {
	return (
		<div
			className="basic-banner"
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<div className="basic-banner__head">
				<p className="sub-headline">{subHeadline}</p>
				<h3 className="headline">{headline}</h3>
			</div>
			<div className="basic-banner__btn">{button}</div>
		</div>
	);
}

export default BasicBanner;
