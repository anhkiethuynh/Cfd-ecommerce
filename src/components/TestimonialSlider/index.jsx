import Carousel from "components/Carousel";
import {
	SliderArrowNext,
	SliderArrowPrev,
} from "components/Carousel/SliderDots";
import TestimonialCard from "components/TestimonialCard";
import React from "react";
import "./style.scss";
const initialSliderSetting = {
	slidesToShow: 3,
	centerPadding: "220px",
	centerMode: true,
	slidesToScroll: 1,
	nextArrow: <SliderArrowNext />,
	prevArrow: <SliderArrowPrev />,
	responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 2,
				centerPadding: "100px",
			},
		},
	],
};

function TestimonialSlider({ list, settings }) {
	return (
		<>
			<div className="testimonial-slider">
				<Carousel settings={settings || initialSliderSetting}>
					<TestimonialCard />
					<TestimonialCard />
					<TestimonialCard />
					<TestimonialCard />
					<TestimonialCard />
					<TestimonialCard />
				</Carousel>
			</div>
		</>
	);
}

export default TestimonialSlider;
