import Badge from "components/Badge";
import React from "react";

function Blog({ blogData }) {
	return (
		<>
			<div className="post">
				<div className="post__img">
					<img src="https://picsum.photos/500" alt="" />
				</div>
				<div className="post__badge">
					<Badge>Dinner tips</Badge>
				</div>
				<div className="post__content">
					<h2 className="post__title">
						Our chef tips for a great and tasty dinner ready in 20 minutes
					</h2>
					<div className="post__info">
						<div className="author-img">
							<img src="https://picsum.photos/40" alt="" />
						</div>
						<div className="author-name">Huynh Anh Kiet</div>
						<div className="post-date">20-10-2020</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Blog;
