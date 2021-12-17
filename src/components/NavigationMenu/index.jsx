import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu({ list }) {
	const renderMenu = (listMenu = list, level = 1) => {
		if (!list?.length || list.length <= 0) return null;

		return (
			<>
				<ul className={`menu menu-level-${level}`}>
					{listMenu.map((menuItem) => (
						<li className="menu__item">
							<Link to={menuItem.slug}>{menuItem?.name}</Link>
							{menuItem?.subList && renderMenu(menuItem?.subList, ++level)}
						</li>
					))}
				</ul>
			</>
		);
	};

	return <nav className="navigation">{renderMenu()}</nav>;
}

export default NavigationMenu;
