import HeaderTop from "../HeaderTop";

import "./style.scss";

import {
	skinnyHeaderLink,
	socialInfo,
	categoriesList,
	menuHeader,
} from "./mock";
import SearchBar from "../SearchBar";
import NavIcon from "../NavIcon";
import NavigationMenu from "../NavigationMenu";
import Logo from "components/Logo";
function Header() {
	return (
		<header className="header">
			<HeaderTop {...{ skinnyHeaderLink, socialInfo }} />
			<div className="container">
				<div className="inner header__main">
					<Logo />
					<SearchBar {...{ categoriesList }} />
					<div className="icon-groups">
						<NavIcon className="icons" />
						<NavIcon className="icons" />
					</div>
				</div>
			</div>
			<NavigationMenu list={menuHeader} />
		</header>
	);
}

export default Header;
