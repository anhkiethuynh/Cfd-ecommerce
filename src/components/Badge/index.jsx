import React from "react";
import "./style.scss";
const Badge = ({ children, className }) => {
	return <div className={`badge ${className}`}>{children}</div>;
};

export default Badge;
