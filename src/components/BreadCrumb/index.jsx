import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
function BreadCrumb({ list }) {
	return (
		<>
			<div className="breadcrumb">
				<div className="container">
					<div className="inner">
						{list?.length &&
							list.map((item) => (
								<NavLink
									className="breadcrumb-link"
									key={item?.label}
									to={item?.path}
								>
									{item?.label}
								</NavLink>
							))}
					</div>
				</div>
			</div>
		</>
	);
}

export default BreadCrumb;
