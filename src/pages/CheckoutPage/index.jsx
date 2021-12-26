import BreadCrumb from "components/BreadCrumb";
import Title from "components/Title";
import React from "react";
import Billing from "./components/Billing";
const brdcr = [
	{
		label: "Home",
		path: "/",
	},
	{
		label: "Checkout",
		path: "/checkout",
	},
];
function CheckoutPage() {
	return (
		<>
			<div className="checkout">
				<BreadCrumb list={brdcr} />
				<div className="wrapper">
					<div className="container">
						<Billing />
						<div className="order-summary"></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CheckoutPage;
