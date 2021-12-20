import BasicBanner from "components/BasicBanner";
import Button from "components/Button";
import CategoriesSection from "components/CategoriesSection";
import { NarrowIcon } from "components/Icon";
import ProductList from "components/ProductList";

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
			<div className="container">
				<ProductList />
				<ProductList direction="vertical" />
			</div>
		</div>
	);
}

export default HomePage;
