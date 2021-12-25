import LinkList from "components/LinkList";
import React from "react";
import "./style.scss";
function CategoriesSection({ listCategory, className, listProduct, children }) {
	return (
		<section className={`categories-section ${className}`}>
			<div className="container">
				<div className="outer">
					<LinkList
						list={listCategory}
						className="categories"
						headline="Categories"
						buttonText="More categories"
					/>

					<div className="content">
						{/* {listProduct?.length > 0 && listProduct.map((product) => Fra)} */}

						{!listProduct?.length > 0 && children}
					</div>
				</div>
			</div>
		</section>
	);
}

export default CategoriesSection;
