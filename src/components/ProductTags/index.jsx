import Button from "components/Button";
import Title from "components/Title";
import React from "react";
import "./style.scss";
function ProductTags({ dataTag, headlines = "Product Tags" }) {
	return (
		<div className="product-tags">
			<Title className="product-tags__title">{headlines}</Title>
			<div className="inner">
				{dataTag?.length > 0 &&
					dataTag.map((tag, index) => (
						<Button
							key={index}
							className="product-tags__item"
							color="bright"
							size="small"
							round
						>
							{tag}
						</Button>
					))}
			</div>
		</div>
	);
}

export default ProductTags;
