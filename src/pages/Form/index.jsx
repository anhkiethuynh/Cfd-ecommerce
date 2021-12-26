/* eslint-disable no-useless-escape */
import Button from "components/Button";
import { DropDownList } from "components/Input";
import { InputText } from "components/Input";
import Title from "components/Title";
import { FORM } from "constant/form";
import React, { useState } from "react";
import "./style.scss";

const REGEX = {
	EMAIL:
		/(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})/,
	PASSWORD: /(?=.*[0-9])(?=.*[!@#$%^&*.])[a-zA-Z0-9!@#$%^&.*]{6,32}/,
	FULLNAME: /(.*[a-z]){2}/,
};
/* IT, Designer, Devops, Other. Khi chọn Other  */

// eslint-disable-next-line no-sparse-arrays
const dropDownList = [
	{
		label: "IT",
		value: "IT",
	},
	{
		label: "Designer",
		value: "Designer",
	},
	{
		label: "Devops",
		value: "Devops",
	},
	{
		label: "Orthers",
		value: "Orthers",
	},
];

function Form() {
	const [form, setForm] = useState({
		userName: "",
		password: "",
		confirmPassword: "",
		fullName: "",
		job: "",
		age: "",
		// agreeRule: false,
	});

	const [errorMessage, setErrorMessage] = useState({
		userName: "",
		password: "",
		confirmPassword: "",
		fullName: "",
		job: "",
		age: "",
		// agreeRule: false,
	});

	const [isSubmitting, setSubmitStatus] = useState(false);

	const onChangeForm = (name) => (ev) => {
		setForm({
			...form,
			[name]: ev.currentTarget.value,
		});
	};

	const handleClickSubmit = (e) => {
		e.preventDefault();
		let error = {};
		const keys = Object.keys(form);
		keys.forEach((key) => {
			if (!form[key]) error[key] = FORM.VALIDATE_MESSAGE.IS_REQUIRE;
			else if (key === "userName" && !REGEX.EMAIL.test(form[key])) {
				error = { ...error, [key]: FORM.VALIDATE_MESSAGE.EMAIL };
			} else if (key === "password" && !REGEX.PASSWORD.test(form[key])) {
				error = { ...error, [key]: FORM.VALIDATE_MESSAGE.PASSWORD };
			} else if (
				key === "confirmPassword" &&
				form.password !== form.confirmPassword
			) {
				error = { ...error, [key]: FORM.VALIDATE_MESSAGE.PASSWORD_CONFIRM };
			} else if (key === "fullname" && !REGEX.FULLNAME.test(form[key])) {
				error = { ...error, [key]: FORM.VALIDATE_MESSAGE.FULL_NAME };
			} else if (key === "job" && !form["ortherJob"]) {
				error = { ...error, ortherJob: FORM.VALIDATE_MESSAGE.IS_REQUIRE };
			} else if (key === "age" && Number(form[key]) <= 18) {
				error = { ...error, [key]: FORM.VALIDATE_MESSAGE.AGE };
			}
		});
		if (Object.keys(error).length > 0) {
			setErrorMessage(error);
			return;
		} else {
			alert("successfully submit");
			setErrorMessage({
				userName: "",
				password: "",
				confirmPassword: "",
				fullName: "",
				job: "",
				age: "",
				// agreeRule: false,
			});
		}
	};

	return (
		<div className="container sc-form">
			<Title className="form-tt">Form</Title>
			<form>
				<InputText
					value={form.userName}
					onChange={onChangeForm("userName")}
					label="UserName"
					id="userName"
					errorMessage={errorMessage.userName}
				/>
				<InputText
					value={form.password}
					onChange={onChangeForm("password")}
					label="Password"
					id="password"
					errorMessage={errorMessage.password}
					type="password"
				/>
				<InputText
					value={form.confirmPassword}
					onChange={onChangeForm("confirmPassword")}
					label="Confirm Password"
					id="password"
					errorMessage={errorMessage.confirmPassword}
					type="password"
				/>
				<InputText
					value={form.fullName}
					onChange={onChangeForm("fullName")}
					label="Full Name"
					id="fullName"
					errorMessage={errorMessage.fullName}
				/>
				<DropDownList
					list={dropDownList}
					onChange={onChangeForm("job")}
					label="Job"
					value={form.job}
					errorMessage={errorMessage.job}
				/>

				{form.job === "Orthers" && (
					<InputText
						label="Other jobs"
						onChange={onChangeForm("ortherJob")}
						value={form.ortherJob}
						id="ortherJob"
						errorMessage={errorMessage.ortherJob || null}
					/>
				)}

				<InputText
					value={form.age}
					onChange={onChangeForm("age")}
					label="Age"
					id="fullname"
					type="number"
					errorMessage={errorMessage.age}
				/>
				{/* <InputText
					type="checkbox"
					value={form.agreeRule}
					onChange={onChangeForm("agreeRule")}
					id="agreeRule"
					label="Agree with our services."
				/> */}
				<Button
					round
					size="large"
					color="stroke"
					onClick={handleClickSubmit}
					isLoading
				>
					Submit nò
				</Button>
			</form>
		</div>
	);
}

export default Form;
