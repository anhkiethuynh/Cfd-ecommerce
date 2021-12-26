import classNames from "classnames";
import React from "react";
import "./style.scss";

export function InputText({
	placeholder = "Text here",
	iconType = false,
	icon = null,
	type = "textbox",
	defaultValue = "Default Value",
	className,
	value,
	label,
	id,
	errorMessage,
	...rest
}) {
	return (
		<>
			<div className="input-group">
				{label && <label htmlFor={id}>{label}</label>}
				<div className="input-wrapper">
					{iconType === "left" && <i className="input-icon--wrapper">{icon}</i>}
					<input
						className={classNames(
							"input",
							`input-${type}`,
							`${iconType ? `input-icon-${iconType}` : ""}`,
							className
						)}
						{...{ type }}
						{...rest}
					/>
					{iconType === "right" && (
						<i className="input-icon--wrapper">{icon}</i>
					)}
				</div>
				{errorMessage && <p className="error-message">{errorMessage || ""}</p>}
			</div>
		</>
	);
}

export function DropDownList({
	list,
	label,
	id,
	defaultText = "-- Select one --",
	icon = null,
	errorMessage,
	...rest
}) {
	return (
		<>
			<div className="input-group">
				{label && <label htmlFor={id}>{label}</label>}
				<div className="input-wrapper">
					<select name={id} {...{ id }} {...rest}>
						<option value="">{defaultText}</option>
						{list?.length &&
							list.map((option) => (
								<option key={option?.value} value={option?.value}>
									{option?.label}
								</option>
							))}
					</select>
					<i className="input-icon--wrapper">{icon}</i>
				</div>
				{errorMessage && <p className="error-message">{errorMessage || ""}</p>}
			</div>
		</>
	);
}

export function SelectItem({
	type = "radio",
	children,
	errorMessage,
	...props
}) {
	console.log(errorMessage);
	return (
		<div className="input-group">
			<label className="input-radio">
				<div className="input-radio-wrapper">
					<input className="input-item" type="radio" {...props} />
					<span className="checkmark"></span>
				</div>
				{children}
			</label>
			{errorMessage && <p className="error-message">{errorMessage || ""}</p>}
		</div>
	);
}
