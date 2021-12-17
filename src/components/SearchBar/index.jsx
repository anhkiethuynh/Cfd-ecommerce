import React from "react";
import { IconSearch, NarrowIcon } from "../Icon";

function SearchBar({ categoriesList, handleClickFilter }) {
	return (
		<div className="search-header">
			<div className="outer">
				<di v className="categories">
					<div className="categories__list">
						<select name="categoriesList" id="categoriesFilterList">
							<option value="all">All Categories</option>
							{categoriesList?.length &&
								categoriesList.map((item) => (
									<option value={item?.autoId}>{item?.name}</option>
								))}
						</select>
						<NarrowIcon direction="down" />
					</div>
				</di>
				<div className="input-wrapper">
					<input type="text" placeholder="Search Products, categories" />
					<button className="icon-search" onClick={() => handleClickFilter()}>
						<IconSearch />
					</button>
				</div>
			</div>
		</div>
	);
}

export default SearchBar;
