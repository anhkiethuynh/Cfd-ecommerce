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
								socialInfo.map((item, index) => {
									if (!!item?.link)
										return (
											<a
												key={`key-${index}`}
												href={item?.link}
												className="skinny-header__link"
											>
												{item?.label}
											</a>
										);
									return (
										<span key={`key-${index}`} className="skinny-header__text">
											{item?.label}
										</span>
									);
								})}
						</div>
						<div className="skinny-header__inner">
							{skinnyHeaderLink.length &&
								skinnyHeaderLink.map((link, index) => (
									<a
										key={`key-${index}`}
										href={link?.link}
										className="skinny-header__link"
									>
										{link.label}
									</a>
								))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
