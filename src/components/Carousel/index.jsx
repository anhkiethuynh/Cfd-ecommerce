import React from "react";
import Slider from "react-slick";
import "./style.scss";

function Carousel({ children, className, settings }) {
	console.log({ settings });
	return (
		<>
			<Slider {...settings} className={className}>
				{children}
			</Slider>
		</>
	);
}

export default Carousel;
