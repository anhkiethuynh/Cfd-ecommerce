import Button from "components/Button";
import { NarrowIcon } from "components/Icon";
import Title from "components/Title";
import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function LinkList({
	className,
	list,
	headline,
	buttonText = false,
	onClickButton = () => {},
}) {
	return (
		<>
			<div className={`list-link ${className}`}>
				{headline && <Title className="list-link__headline">{headline}</Title>}
				{list?.length > 0 &&
					list?.map((item) => {
						return (
							<Link to="/" key={item?.label} className="list-link__item">
								{item?.label}
							</Link>
						);
					})}
				{buttonText && (
					<Button
						color="bright"
						size="medium"
						type="icon-right"
						onClick={onClickButton()}
						round
						icon={<NarrowIcon direction="right" fill="#151515" />}
					>
						{buttonText}
					</Button>
				)}
			</div>
		</>
	);
}

export default LinkList;
