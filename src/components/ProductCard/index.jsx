import classNames from "classnames";
import Button from "components/Button";
import { IconRating } from "components/Icon";
import { NarrowIcon } from "components/Icon";
import React from "react";
import "./style.scss";
function ProductCard({
	productData,
	border = false,
	size = "small",
	showRating = false,
}) {
	const handleAddtoWishList = () => {};

	const dataMappingFunction = (data) => {
		const isDiscount = data?.isPromotion || false;
		const discountedPrice = data?.discountedPrice?.formatted || 0;
		const originalPrice = data?.originalPrice?.formatted || "0 USD";

		const rating = data?.rating || 0;
		const isFreeShip = data?.shipping.isFreeShip || false;
		const shippingFee = isFreeShip
			? "0 USD"
			: data?.shipping?.shippingFee.formatted || "0 USD";

		const stock = data?.stock?.formatted || "0";
		const isInStock = !data?.stock?.isInstock || false;

		const farm = data?.farm || "farm";
		const fresheness = data?.fresheness;
		const imgUrl = data?.imgUrl;
		const productName = data?.productName || "Product Name";
		const productDescription =
			data?.productDescription || "Product Description";
		const autoId = data?.autoId;
		const discountPercent = (
			(data?.discountedPrice?.amount / data?.originalPrice?.amount) *
			100
		).toFixed(2);
		return {
			isDiscount,
			discountedPrice,
			originalPrice,
			rating,
			isFreeShip,
			shippingFee,
			stock,
			isInStock,
			farm,
			fresheness,
			imgUrl,
			productName,
			productDescription,
			autoId,
			discountPercent,
		};
	};

	const {
		isDiscount,
		discountedPrice,
		originalPrice,
		rating,
		isFreeShip,
		shippingFee,
		stock,
		isInStock,
		farm,
		fresheness,
		imgUrl,
		productName,
		productDescription,
		autoId,
		discountPercent,
	} = dataMappingFunction(productData);

	// s;
	return (
		<div
			className={classNames("product-card", { border }, `product-card-${size}`)}
		>
			<div className="product-card__img">
				{isDiscount && <span className="badge">{`${discountPercent} %`}</span>}
				<img src={imgUrl} alt={productName} />
			</div>
			<div className="product-card__content">
				<div className="product-info">
					<h3 className="product-title">{productName}</h3>
					{/* <Title className="product-title">{productName}</Title> */}
					<div className="product-description">{productDescription}</div>
					{showRating && (
						<div className="product-rating">
							{[...Array(5)].map((_, index) => {
								return <IconRating isRated={index < rating} />;
							})}
						</div>
					)}
					{size === "large" && (
						<ul className="product-atrributes">
							<li>
								<span></span>
								<span></span>
							</li>
							<li>
								<span></span>
								<span></span>
							</li>
							<li>
								<span></span>
								<span></span>
							</li>
							<li>
								<span></span>
								<span></span>
							</li>
						</ul>
					)}
				</div>
				<div className="product-option">
					<div className={classNames("product-pricing", { isDiscount })}>
						<div className={classNames("pricing", { isDiscount })}>
							{originalPrice}
						</div>
						<div className={classNames("pricing")}>
							{isDiscount && discountedPrice}
						</div>
					</div>
					{size === "large" && (
						<div className="product-shipping">
							{isFreeShip && (
								<div className="freeship-content">Free Shipping</div>
							)}
							<div className="shipping-content">Delivery in 1 day</div>
						</div>
					)}
					<div className="product-btns">
						{size === "small" && (
							<Button round size="medium" onClick={() => {}}>
								Buy Now
							</Button>
						)}
						{size === "large" && (
							<>
								<Button
									round
									size="medium"
									type="icon-right"
									icon={<NarrowIcon direction="right" fill="#fff" />}
									onClick={() => {}}
								>
									Product Detail
								</Button>
								<Button
									round
									color="bright"
									size="small"
									type="icon-left"
									icon={<NarrowIcon direction="right" fill="#fff" />}
									onClick={() => {}}
								>
									Add To Wishlist
								</Button>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
