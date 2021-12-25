import Blog from "components/Blog";
import React from "react";
import "./style.scss";
const BlogList = ({ list, dataColumn = 3 }) => {
	return (
		<>
			<div className="blog-list" data-column={dataColumn}>
				<div className="inner">
					<Blog />
					<Blog />
					<Blog />
					<Blog />
					<Blog />
				</div>
			</div>
		</>
	);
};

export default BlogList;
