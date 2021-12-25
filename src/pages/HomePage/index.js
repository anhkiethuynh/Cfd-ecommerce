import BasicBanner from "components/BasicBanner";
import BlogList from "components/BlogList";
import Button from "components/Button";
import CategoriesSection from "components/CategoriesSection";
import { NarrowIcon } from "components/Icon";
import ProductList from "components/ProductList";
import TestimonialSlider from "components/TestimonialSlider";
import Title from "components/Title";

import React from "react";
import "./style.scss";

const listLink = [
	{ label: "Bakery" },
	{ label: "Fruit and vegetables" },
	{ label: "Meat and fish" },
	{ label: "Drinks" },
	{ label: "Kitchen" },
];
function HomePage() {
	return (
		<div className="homepage">
			<CategoriesSection listCategory={listLink}>
				<BasicBanner
					subHeadline="Banner subfocus"
					headline="Space for heading"
					button={
						<Button
							round
							color="stroke"
							size="medium"
							type="icon-right"
							icon={<NarrowIcon direction="right" fill="#151515" />}
						>
							Click me
						</Button>
					}
				/>
				<BasicBanner
					subHeadline="Banner subfocus"
					headline="Space for heading"
					button={
						<Button
							round
							color="stroke"
							size="medium"
							type="icon-right"
							icon={<NarrowIcon direction="right" fill="#151515" />}
						>
							Click me
						</Button>
					}
				/>
			</CategoriesSection>

			<CategoriesSection listCategory={listLink}>
				<ProductList count={3} />
			</CategoriesSection>
			<CategoriesSection listCategory={listLink}>
				<ProductList count={3} />
			</CategoriesSection>

			<section className="testominal">
				<div className="container">
					<div className="headline-wrapper">
						<Title className="testominal-title">Our cusomters say</Title>
						<Button
							color="simple"
							size="small"
							icon={<NarrowIcon direction="right" />}
							type="icon-right"
						>
							See more
						</Button>
					</div>
				</div>
				<TestimonialSlider />
			</section>

			<section className="best-seller">
				<div className="container">
					<div className="headline-wrapper">
						<Title className="testominal-title">Best Seller</Title>
						<Button
							color="simple"
							size="small"
							icon={<NarrowIcon direction="right" />}
							type="icon-right"
						>
							See more
						</Button>
					</div>
					<div className="product-list--wrap">
						<ProductList count={4} productsPerRow={4} />
					</div>
				</div>
			</section>
			<section className="blogs">
				<div className="container">
					<BlogList />
				</div>
			</section>
		</div>
	);
}

export default HomePage;
