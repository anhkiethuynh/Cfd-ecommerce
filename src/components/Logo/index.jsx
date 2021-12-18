import { IconLogo } from "components/Icon";
import { PATH } from "constant/routes";
import React from "react";
import { Link } from "react-router-dom";
function Logo({ hyperLink = false, linkTo = PATH.HOME_PAGE }) {
	return (
		<>
			{!hyperLink && (
				<div className="logo">
					<IconLogo />
				</div>
			)}
			{hyperLink && (
				<Link to={linkTo} className="logo">
					<IconLogo />
				</Link>
			)}
		</>
	);
}

export default Logo;
