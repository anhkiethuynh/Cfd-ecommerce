import classNames from "classnames";
import ProductCard from "components/ProductCard";
import { getProductList } from "constant/mock";
import React from "react";
import "./style.scss";
const listProduct = getProductList(10);
console.log({ listProduct });
function ProductList({
	direction = "horizontal",
	productList = [],
	className,
	...props
}) {
	productList = [...listProduct];
	const { size = null, border = null, showRating = null } = props;
	return (
		<div className={classNames("product-list", `product-list-${direction}`)}>
			<div className="inner">
				{productList?.length > 0 &&
					productList.map((product) => (
						<ProductCard
							key={product?.autoId}
							size={direction === "horizontal" ? "small" : "large"}
							productData={product}
							border
							showRating
							{...(size && { size })}
							{...(border && { border })}
							{...(showRating && { showRating })}
						/>
					))}
			</div>
		</div>
	);
}

export default ProductList;
