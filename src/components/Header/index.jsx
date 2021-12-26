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
import { IconAccount } from "components/Icon";
import { IconBag } from "components/Icon";
import { usePageContext } from "context/PageContext";
function Header() {
	const { openCartModal } = usePageContext();

	return (
		<header className="header">
			<HeaderTop {...{ skinnyHeaderLink, socialInfo }} />
			<div className="container">
				<div className="inner header__main">
					<Logo />
					<SearchBar {...{ categoriesList }} />
					<div className="icon-groups">
						<NavIcon className="nav-icon" icon={<IconAccount />} />
						<NavIcon
							className="nav-icon cart-icon"
							onClick={openCartModal}
							icon={<IconBag />}
							data-product-count="10"
						/>
					</div>
				</div>
			</div>
			<NavigationMenu list={menuHeader} />
		</header>
	);
}

export default Header;
