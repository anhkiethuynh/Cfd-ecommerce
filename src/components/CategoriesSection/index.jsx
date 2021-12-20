import LinkList from "components/LinkList";
import React from "react";

function CategoriesSection({ listCategory, className, listProduct, children }) {
	return (
		<section className={`categories-section ${className}`}>
			<div className="container">
				<div className="outer">
					<div className="categories">
						<LinkList list={listCategory} headline="Categories" />
					</div>
					<div className="content">
						{listProduct?.length > 0 && listProduct.map((product) => null)}

						{!listProduct?.length > 0 && children}
					</div>
				</div>
			</div>
		</section>
	);
}

export default CategoriesSection;
