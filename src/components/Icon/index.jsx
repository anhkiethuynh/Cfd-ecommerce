export const NarrowIcon = ({ direction = "left" }) => {
	let icon = (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.46609 4.81329L6.72609 7.55329C6.60192 7.6782 6.53223 7.84717 6.53223 8.02329C6.53223 8.19942 6.60192 8.36838 6.72609 8.49329L9.39276 11.16"
				stroke="white"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="bevel"
			/>
		</svg>
	);
	if (direction === "right") {
		icon = (
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M6.5332 11.1867L9.2732 8.44669C9.39737 8.32178 9.46706 8.15282 9.46706 7.97669C9.46706 7.80057 9.39737 7.6316 9.2732 7.50669L6.60654 4.84003"
					stroke="white"
					strokeWidth="2.5"
					strokeLinecap="round"
					strokeLinejoin="bevel"
				/>
			</svg>
		);
	}
	if (direction === "down") {
		icon = (
			<svg
				width="20"
				height="10"
				viewBox="0 0 20 10"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2.0332 1.3335L8.8832 8.1835C9.19547 8.49391 9.61789 8.66815 10.0582 8.66815C10.4985 8.66815 10.9209 8.49391 11.2332 8.1835L17.8999 1.51683"
					stroke="#151515"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="bevel"
				/>
			</svg>
		);
	}
	return icon;
};
export const IconSearch = ({ fill = "#151515" }) => {
	return (
		<svg
			width="31"
			height="31"
			viewBox="0 0 31 31"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17.9833 24.5833C24.4266 24.5833 29.65 19.36 29.65 12.9167C29.65 6.47334 24.4266 1.25 17.9833 1.25C11.54 1.25 6.31665 6.47334 6.31665 12.9167C6.31665 19.36 11.54 24.5833 17.9833 24.5833Z"
				stroke={fill}
				stroke-width="2.5"
				stroke-linecap="round"
				stroke-linejoin="bevel"
			/>
			<path
				d="M9.53346 21.5999L1.7168 29.4165"
				stroke={fill}
				stroke-width="2.5"
				stroke-linecap="round"
				stroke-linejoin="bevel"
			/>
		</svg>
	);
};
