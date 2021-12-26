export const FORM = {
	VALIDATE_MESSAGE: {
		IS_REQUIRE: "This field is required.",
		PASSWORD:
			"Password must be between 8 - 32 characters; includes numbers, uppercase, lowercase characters and special characters.",
		FULL_NAME: "Fullname must be at least 2 characters.",
		AGE: "You must be older than 18 years old.",
		EMAIL: "Your email is invalid.",
		PASSWORD_CONFIRM: "Confirm password does not match",
		RULE: "You have to agree our services rules.",
		PHONE:
			"Your number phone must be at least 10 character and not contain characters.",
	},
	REGEX: {
		EMAIL:
			/(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})/,
		PASSWORD: /(?=.*[0-9])(?=.*[!@#$%^&*.])[a-zA-Z0-9!@#$%^&.*]{6,32}/,
		FULLNAME: /(.*[a-z]){2}/,
		PHONE: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
	},
};
