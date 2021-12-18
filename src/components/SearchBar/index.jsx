import React from "react";
import "./style.scss";
import { IconSearch, NarrowIcon } from "../Icon";

function SearchBar({ categoriesList, handleClickFilter }) {
	const onSearchClick = () => {
		console.log("Click Search");
	};
	return (
		<div className="search-header">
			<div className="outer">
				<div className="categories search-wrapper input-group input-wrapper">
					{/* <DropDownList icon={<NarrowIcon direction="down" />} /> */}

					<select name="categoriesList" id="categoriesFilterList">
						<option value="all">All Categories</option>
						{categoriesList?.length &&
							categoriesList.map((item) => (
								<option key={item?.autoId} value={item?.autoId}>
									{item?.name}
								</option>
							))}
					</select>
					<NarrowIcon direction="down" />
				</div>
				<div className="search-wrapper">
					{/* <input type="text" placeholder="Search Products, categories" /> */}
					<div className="input-group input-wrapper ">
						<input
							type="text"
							className="input input-text input-icon-right"
							placeholder="Search Products, categories"
						/>
						<button
							className="icon-search input-icon--wrapper"
							onClick={() => onSearchClick()}
						>
							<IconSearch />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchBar;
