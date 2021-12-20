import React from "react";

function Title({
	tag = "h3",
	// content,
	fontSize = 18,
	fontFamily = "ppsm",
	fontWeight = 400,
	lineHeight = "27px",
	className,
	children,
}) {
	const CustomTag = tag;
	return (
		<CustomTag
			{...{ className }}
			style={{ ...{ fontSize, fontFamily, fontWeight, lineHeight } }}
		>
			{children}
		</CustomTag>
	);
}

export default Title;
