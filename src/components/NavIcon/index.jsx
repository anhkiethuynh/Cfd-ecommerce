import React from "react";
const NavIcon = ({ icon, className, onClick, ...props }) => {
	return <button {...{ className, onClick, ...props }}>{icon}</button>;
};

export default NavIcon;
