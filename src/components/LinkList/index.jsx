import Button from "components/Button";
import { NarrowIcon } from "components/Icon";
import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function LinkList({ list, headline }) {
	return (
		<>
			<div className="list-link">
				{headline && <h3 className="list-link__headline">{headline}</h3>}
				{list?.length > 0 &&
					list?.map((item) => {
						return (
							<Link to="/" key={item?.label} className="list-link__item">
								{item?.label}
							</Link>
						);
					})}
				<Button
					color="bright"
					size="medium"
					type="icon-right"
					round
					icon={<NarrowIcon direction="right" fill="#151515" />}
				>
					Button
				</Button>
			</div>
		</>
	);
}

export default LinkList;
