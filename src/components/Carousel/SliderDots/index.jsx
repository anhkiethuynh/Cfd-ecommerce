import React from "react";

export function SliderArrowPrev({ ...props }) {
	const { className, onClick } = props;
	return (
		<>
			<div
				className={`slider-custom-btn slider-prev ${className}`}
				onClick={onClick}
			>
				<svg
					width="8"
					height="18"
					viewBox="0 0 10 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7.93315 1.62665L2.45315 7.10665C2.20482 7.35646 2.06543 7.6944 2.06543 8.04665C2.06543 8.3989 2.20482 8.73683 2.45315 8.98665L7.78649 14.32"
						stroke="white"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="bevel"
					/>
				</svg>
			</div>
		</>
	);
}

export function SliderArrowNext({ ...props }) {
	const { className, onClick } = props;
	return (
		<>
			<div
				className={`slider-custom-btn slider-next ${className}`}
				onClick={onClick}
			>
				<svg
					width="8"
					height="18"
					viewBox="0 0 10 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2.06641 14.3734L7.54641 8.89339C7.79474 8.64357 7.93413 8.30563 7.93413 7.95339C7.93413 7.60114 7.79474 7.2632 7.54641 7.01339L2.21307 1.68005"
						stroke="white"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="bevel"
					/>
				</svg>
			</div>
		</>
	);
}
