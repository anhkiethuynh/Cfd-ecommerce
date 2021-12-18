import classNames from "classnames";
import React, { useState } from "react";
import "./style.scss";

export function InputText({
	placeholder = "Text here",
	iconType = false,
	icon = null,
	type = "textbox",
	defaultValue = "Default Value",
	className,
	onChange,
	onBlur,
	label,
	value,
	id,
}) {
	const [text, setText] = useState("");
	const handleChangeInput = (e) => {
		console.log(e.currentTarget.value);
		setText(e.currentTarget.value);
	};
	return (
		<>
			<div className="input-group">
				{label && <label for={id}>{label}</label>}
				<div className="input-wrapper">
					{iconType === "left" && <i className="input-icon--wrapper">{icon}</i>}
					<input
						className={classNames(
							"input",
							`input-${type}`,
							`${iconType ? `input-icon-${iconType}` : ""}`,
							className
						)}
						name={id}
						{...{
							placeholder,
							type,
							onChange,
							onBlur,
							id,
							value,
						}}
						value={text || ""}
						onChange={handleChangeInput}
					/>
					{iconType === "right" && (
						<i className="input-icon--wrapper">{icon}</i>
					)}
				</div>
			</div>
		</>
	);
}

export function DropDownList({
	list,
	label,
	id,
	defaultText = "-- Select one --",
	onChange,
	onBlur,
	icon = null,
}) {
	return (
		<>
			<div className="input-group">
				{label && <label for={id}>{label}</label>}
				<div className="input-wrapper">
					<select
						name={id}
						{...{ onChange, onBlur, id }}
						defaultValue={defaultText}
					>
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
			</div>
		</>
	);
}
