import { FORM } from "constant/form";
import { useState } from "react";

export const useForm = ({ initialValue = {} }) => {
	const [form, setForm] = useState(initialValue);

	const [errors, setErrors] = useState({});

	const rules = {};

	const onChange = (name) => (e) => {
		form[name] = e.currentTarget.value;
	};

	const register = (name, option = {}) => {
		rules[name] = option;

		return {
			name,
			onChange: onChange(name),
			value: form[name],
		};
	};

	const validate = () => {
		const error = {};
		for (let name in rules) {
			const r = rules[name];

			if (r.required && !form[name]) {
				error[name] = FORM.VALIDATE_MESSAGE.IS_REQUIRE;
			}
			if (r?.pattern && !(r?.pattern?.regex).test(form[name]) && !error[name])
				error[name] = r?.pattern?.message || `This ${name} is invalid.`;
		}
		setErrors(error);
		return error;
	};

	const handleSubmit = (submitFunction) => {
		return (e) => {
			e.preventDefault();
			const err = validate();

			if (Object.keys(err).length === 0) submitFunction(form);
		};
	};

	return {
		register,
		handleSubmit,
		errors,
		form,
	};
};
