import React from "react";
import "./style.scss";

export default function HeaderTop({ socialInfo, skinnyHeaderLink }) {
	return (
		<>
			<div className="skinny-header">
				<div className="container">
					<div className="outer">
						<div className="skinny-header__inner">
							{socialInfo.length &&
								socialInfo.map((inf) => (
									<a href={inf.link} className="skinny-header__link">
										{inf.label}
									</a>
								))}
						</div>
						<div className="skinny-header__inner">
							{skinnyHeaderLink.length &&
								skinnyHeaderLink.map((link) => <a href={link}>{link.label}</a>)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
