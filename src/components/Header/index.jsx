import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
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
function Header() {
	return (
		<header className="header">
			<HeaderTop {...{ skinnyHeaderLink, socialInfo }} />
			<div className="container">
				<div className="inner">
					<Link to="/" className="logo">
						<img src={Logo} alt="Freshnesecom" />
					</Link>
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
