import { IconDHL } from "components/Icon";
import { IconMasterCard } from "components/Icon";
import { IconVISA } from "components/Icon";
import { IconFedEx } from "components/Icon";
import { SelectItem } from "components/Input";
import { InputText } from "components/Input";
import Title from "components/Title";
import { FORM } from "constant/form";
import { useForm } from "hooks/useForm";
import React from "react";
import "./style.scss";

function Billing() {
	const { form, errors, register, handleSubmit } = useForm({});

	console.log(errors);

	const submitHandler = (form) => {
		console.log({ form });
	};
	return (
		<div>
			<div className="billing">
				<form action="" className="form" onSubmit={handleSubmit(submitHandler)}>
					<div className="checkout-row">
						<div className="checkout-headline">
							<Title className="billing-title" fontSize={20}>
								Billing info
							</Title>
							<p>Please enter your billing info</p>
						</div>
						<div className="billing-step">Step 1 of 5</div>
					</div>

					<div className="form-wrapper">
						<div className="form-col">
							<InputText
								label="First name"
								defaultValue={form["firstName"]}
								{...register("firstName", {
									required: true,
								})}
								placeHolder="First name"
								errorMessage={errors["firstName"]}
							/>
						</div>
						<div className="form-col">
							<InputText
								label="Last Name"
								defaultValue={form["lastName"]}
								{...register("lastName", {
									required: true,
								})}
								placeHolder="First name"
								errorMessage={errors["lastName"]}
							/>
						</div>
						<div className="form-col">
							<InputText
								label="Email Address"
								defaultValue={form["email"]}
								{...register("email", {
									pattern: {
										regex: FORM.REGEX.EMAIL,
										message: FORM.VALIDATE_MESSAGE.EMAIL,
									},
								})}
								placeHolder="example@gmail.com"
								errorMessage={errors["email"]}
							/>
						</div>
						<div className="form-col">
							<InputText
								label="Phone Number"
								defaultValue={form["phoneNumber"]}
								{...register("phoneNumber", {
									pattern: {
										regex: FORM.REGEX.PHONE,
										message: FORM.VALIDATE_MESSAGE.PHONE,
									},
								})}
								placeHolder="033 6543 008"
								errorMessage={errors["phoneNumber"]}
							/>
						</div>
						<div className="form-col">
							<InputText
								label="Address"
								defaultValue={form["address"]}
								{...register("address", {})}
								placeHolder="34 Chester Road, Green Way, Timperley"
								errorMessage={errors["address"]}
							/>
						</div>
						<div className="form-col">
							<InputText
								label="Town / City"
								defaultValue={form["city"]}
								{...register("city", { required: true })}
								placeHolder="Greater Manchester"
								errorMessage={errors["city"]}
							/>
						</div>
						<div className="form-col">
							<InputText
								label="State / Country"
								defaultValue={form["country"]}
								{...register("country", { required: true })}
								placeHolder="England"
								errorMessage={errors["country"]}
							/>
						</div>
						<div className="form-col">
							<InputText
								label="ZIP/Postal code"
								defaultValue={form["postalCode"]}
								{...register("postalCode", { required: true })}
								placeHolder="097685"
								errorMessage={errors["postalCode"]}
							/>
						</div>
					</div>

					<div className="checkout-row">
						<div className="checkout-headline">
							<Title className="billing-title" fontSize={20}>
								Billing Method
							</Title>
							<p>Please enter your payment method</p>
						</div>
						<div className="billing-step">Step 2 of 5</div>
					</div>

					<div className="method">
						<SelectItem
							{...register("billingMethod", { required: true })}
							errorMessage={errors["billingMethod"]}
							value="FedEx"
						>
							<div className="method-wrap">
								<div className="method-name">FedEx</div>
								<div className="method-price">
									<span>+32 USD</span>
									<span>Additional price</span>
								</div>
								<div className="method-logo">
									<IconFedEx />
								</div>
							</div>
						</SelectItem>
						<SelectItem
							{...register("billingMethod", { required: true })}
							errorMessage={errors["billingMethod"]}
							value="DHL"
						>
							<div className="method-wrap">
								<div className="method-name">FedEx</div>
								<div className="method-price">
									<span>+32 USD</span>
									<span>Additional price</span>
								</div>
								<div className="method-logo">
									<IconDHL />
								</div>
							</div>
						</SelectItem>
					</div>

					<div className="checkout-row">
						<div className="checkout-headline">
							<Title className="billing-title" fontSize={20}>
								Payment Method
							</Title>
							<p>Please enter your payment method</p>
						</div>
						<div className="billing-step">Step 2 of 5</div>
					</div>

					<div className="method --card-info">
						<SelectItem
							{...register("paymentMethod", { required: true })}
							errorMessage={errors["paymentMethod"]}
							value="FedEx"
						>
							<div className="method-wrap">
								<div className="method-name">Credit Cart</div>
								<div className="method-price">
									<span>+32 USD</span>
									<span>Additional price</span>
								</div>
								<div className="method-logo">
									<IconVISA />
									<IconMasterCard />
								</div>
							</div>
							<div className="card-info">
								<InputText
									label="Card Number"
									defaultValue={form["cardNumber"]}
									{...register("cardNumber", { required: true })}
									placeHolder="Card number"
									errorMessage={errors["cardNumber"]}
								/>
								<InputText
									label="Card holder"
									defaultValue={form["cardHolder"]}
									{...register("cardHolder", { required: true })}
									placeHolder="Greater Manchester"
									errorMessage={errors["cardHolder"]}
								/>
								<InputText
									label="Card Number"
									defaultValue={form["cardNumber"]}
									{...register("cardNumber", { required: true })}
									placeHolder="Card Holder"
									errorMessage={errors["cardNumber"]}
								/>
								<InputText
									label="Expiration date"
									defaultValue={form["expiratedDate"]}
									{...register("expiratedDate", { required: true })}
									placeHolder="DD/MM/YYYY"
									errorMessage={errors["expiratedDate"]}
								/>
								<InputText
									label="CVC"
									defaultValue={form["cvc"]}
									{...register("cvc", { required: true })}
									placeHolder="DD/MM/YYYY"
									errorMessage={errors["cvc"]}
								/>
							</div>
						</SelectItem>
					</div>
					<input type="submit" value="Submit" />
				</form>
			</div>
		</div>
	);
}

export default Billing;
