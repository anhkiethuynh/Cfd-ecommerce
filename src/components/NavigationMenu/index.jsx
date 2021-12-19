import { NarrowIcon } from "components/Icon";
import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
function NavigationMenu({ list }) {
	const renderMenu = (listMenu = list, level = 1, isMasterLevel = true) => {
		if (!list?.length || list.length <= 0) return null;
		return (
			<>
				<ul className={`menu menu-level-${level}`}>
					{listMenu.map((menuItem, index) => {
						return (
							<li className="menu__item" key={`item-${menuItem.slug}`}>
								<Link to={menuItem.slug} className="menu__link">
									{menuItem?.name}
									{menuItem?.subList && (
										<NarrowIcon
											direction={`${isMasterLevel ? "down" : "right"}`}
										/>
									)}
								</Link>
								{menuItem?.subList &&
									renderMenu(menuItem?.subList, level + 1, false)}
							</li>
						);
					})}
				</ul>
			</>
		);
	};

	return (
		<nav className="navigation">
			<div className="container">
				<div className="outer">{renderMenu()}</div>
			</div>
		</nav>
	);
}

export default NavigationMenu;
