import React from "react";

function BasicBanner({ headline = "", subHeadline = "", button }) {
	return (
		<div className="basic-banner">
			<div className="basic-banner__head">
				<p className="sub-headline">{subHeadline}</p>
				<h3 className="headline">{headline}</h3>
			</div>
			<div className="basic-banner__btn">{button}</div>
		</div>
	);
}

export default BasicBanner;
