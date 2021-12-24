import React from "react";
import "./style.scss";
const TestimonialCard = ({ data }) => {
	return (
		<div className="testimonial">
			<div className="inner">
				<div className="testimonial__quote">
					<q>
						This is an super space for your customers qoute. Don’t worry it
						works smooth as pie. You will get all what you need by writiing a
						text here.
					</q>
				</div>
				<div className="testimonial__author">Name and Surname</div>
				<div className="testimonial__image">
					<img src="https://picsum.photos/30" alt="" />
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
